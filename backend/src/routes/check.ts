import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import zod from "zod";
import multer from "multer";
import { createClient } from "@supabase/supabase-js";
import { userMiddleware } from "../middleware.js";

const TestRouter = express.Router();
const prisma = new PrismaClient();
TestRouter.use(express.json());


const SUPABASE_URL = "https://xntcmbrnuyvzjeupfbyt.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY ;

if (!SUPABASE_KEY) {
  throw new Error("SUPABASE_KEY is not defined");
}
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


const storage = multer.memoryStorage();
const upload = multer({ storage });

const allowedTypes = ["image", "document", "video", "audio", "application", "text", "code"];
const fileExtensions: Record<string, RegExp> = {
  image: /\.(jpg|jpeg|png|gif|webp)$/i,
  document: /\.(pdf|docx?|pptx?|xlsx?|txt)$/i,
  video: /\.(mp4|mkv|webm|mov)$/i,
  audio: /\.(mp3|wav|ogg)$/i,
  application: /\.(zip|rar|exe)$/i,
  text: /\.(txt|csv|json|xml|md)$/i,
  code: /\.(js|ts|jsx|tsx|py|java|cpp|c|cs|go|rs|html|css|json|xml|sh|sql)$/i,
};


const ContentSchema = zod.object({
  type: zod.string().refine((t) => allowedTypes.includes(t), {
    message: `Type must be one of: ${allowedTypes.join(", ")}`,
  }),
  title: zod.string().min(3, "Title must be at least 3 characters long"),
  link: zod.string().url().optional(), 
});

TestRouter.post("/", userMiddleware, upload.single("file"), async (req: any, res: any) => {
  try {
    const { type, title } = req.body;

    const parsedData = ContentSchema.safeParse({ type, title });
    if (!parsedData.success) {
      return res.status(400).json({ message: "Invalid input data", errors: parsedData.error.format() });
    }

    let fileUrl = req.body.link; 

    
    if (req.file) {
      const fileName = `${Date.now()}_${req.file.originalname}`;
      const { data, error } = await supabase.storage.from("uploads").upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype, 
        upsert: false,
      });

      if (error) {
        console.error("Supabase upload error:", error);
        return res.status(500).json({ message: "Failed to upload file", error });
      }

      fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/uploads/${fileName}`;
    }

   
    if (!fileUrl) {
      return res.status(400).json({ message: "A file or a valid link is required" });
    }

    const response = await prisma.content.create({
      data: { link: fileUrl, type, title, userId: req.userId },
    });

    return res.status(201).json({
      message: "File uploaded successfully",
      content: response,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

TestRouter.get("/", userMiddleware, async (req: any, res: any) => {
  try {
    const response = await prisma.content.findMany({
      where: { userId: req.userId },
    });

    return res.status(200).json({ response });
  } catch (error) {
    console.error("Error fetching content:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Delete File (From DB & Storage)
TestRouter.delete("/", async (req: any, res: any) => {
  try {
    const { contentId } = req.body;

    // Fetch existing content
    const content = await prisma.content.findUnique({ where: { id: contentId } });
    if (!content) return res.status(404).json({ message: "Content not found" });

    // Delete from Supabase Storage
    const filePath = content.link.split("/storage/v1/object/public/uploads/")[1];
    if (filePath) {
      await supabase.storage.from("uploads").remove([filePath]);
    }

    // Delete from DB
    await prisma.content.delete({ where: { id: contentId } });

    return res.status(200).json({ message: "Item Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting content:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export { TestRouter };
