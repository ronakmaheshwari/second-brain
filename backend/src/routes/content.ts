import express from "express";
import zod from "zod";
import multer from "multer";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import { userMiddleware } from "../middleware.js";

const supabaseUrl = "https://xntcmbrnuyvzjeupfbyt.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey) {
  throw new Error("SUPABASE_KEY is not defined in the environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);
const prisma = new PrismaClient();
const contentRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

const contentTypes = ["image", "video", "article", "audio", "document"] as const;

const ContentSchema = zod.object({
  link: zod.string().url().optional(),
  type: zod.enum(contentTypes),
  title: zod.string().min(1, "Title is required"),
  tags: zod.array(zod.string()).optional(),
});


async function uploadFileToSupabase(file: Express.Multer.File, type: string) {
  const fileExt = file.originalname.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  const bucket = type === "image" ? "images" : "documents"; 

  const { data, error } = await supabase.storage.from(bucket).upload(fileName, file.buffer, {
    contentType: file.mimetype,
    upsert: true,
  });

  if (error) throw new Error(`Upload failed: ${error.message}`);

  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${fileName}`;
}

contentRouter.post("/", upload.single("file"), userMiddleware ,async (req: any, res: any) => {
  try {
    const { type, title, tags } = req.body;
    const file = req.file;

    if (!contentTypes.includes(type)) {
      return res.status(400).json({ message: "Invalid content type" });
    }

    let link = req.body.link;

    if (file) {
      if (type !== "image" && type !== "document") {
        return res.status(400).json({ message: "Only images or documents can be uploaded" });
      }
      link = await uploadFileToSupabase(file, type);
    }

    if (!link) {
      return res.status(400).json({ message: "Either provide a link or upload a file" });
    }

    const id = req.userId; // Assuming middleware adds this
    await prisma.content.create({
      data: {
        link,
        type,
        title,
        tags,
        userId: id,
      },
    });

    return res.status(200).json({ message: "Content Successfully Added" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


contentRouter.get("/", userMiddleware ,async (req: any, res: any) => {
  try {
    const id = req.userId;
    const response = await prisma.content.findMany({
      where: { userId: id },
    });

    return res.status(200).json({ content: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

contentRouter.delete("/",userMiddleware,async (req: any, res: any)=>{
    try{
        const contentId = req.body.contentId;
        const response  = await prisma.content.delete({
            where:{
                id:contentId
            }
        })
        return res.status(200).json({
            message:"Content Deleted"
        })
    }catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

export { contentRouter };
