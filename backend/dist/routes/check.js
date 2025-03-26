import express from "express";
import { PrismaClient } from "@prisma/client";
import zod from "zod";
import multer from "multer";
import { createClient } from "@supabase/supabase-js";
import { userMiddleware } from "../middleware.js";
const TestRouter = express.Router();
const prisma = new PrismaClient();
TestRouter.use(express.json());
// ✅ Initialize Supabase Client
const SUPABASE_URL = "https://xntcmbrnuyvzjeupfbyt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudGNtYnJudXl2empldXBmYnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjMzMDQsImV4cCI6MjA1ODQ5OTMwNH0.hH3W-O4G_byuPfaaU3fkIRvwcPGMA6h_4vLw4xGQDjw";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
// ✅ Multer Setup for File Uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });
const allowedTypes = ["image", "document", "video"];
const fileExtensions = {
    image: /\.(jpg|jpeg|png|gif|webp)$/i,
    document: /\.(pdf|docx?|pptx?|xlsx?)$/i,
    video: /\.(mp4|mkv|webm|mov)$/i,
};
const ContentSchema = zod.object({
    type: zod.string().refine((t) => allowedTypes.includes(t), {
        message: `Type must be one of: ${allowedTypes.join(", ")}`,
    }),
    title: zod.string().min(3, "Title must be at least 3 characters long"),
    link: zod.string().url().optional(), // ✅ Allow optional direct link
});
// ✅ Route to Handle File Uploads
TestRouter.post("/", userMiddleware, upload.single("file"), async (req, res) => {
    try {
        const { type, title } = req.body;
        // Validate the request
        const parsedData = ContentSchema.safeParse({ type, title });
        if (!parsedData.success) {
            return res.status(400).json({ message: "Invalid input data", errors: parsedData.error.format() });
        }
        let fileUrl = req.body.link; // Default to user-provided link
        // ✅ If a file is uploaded, store it in Supabase
        if (req.file) {
            const fileName = `${Date.now()}_${req.file.originalname}`;
            const { data, error } = await supabase.storage.from("uploads").upload(fileName, req.file.buffer, {
                contentType: req.file.mimetype,
                upsert: false,
            });
            if (error) {
                console.error("Supabase upload error:", error);
                return res.status(500).json({ message: "Failed to upload file" });
            }
            fileUrl = `${SUPABASE_URL}/storage/v1/object/public/uploads/${fileName}`;
        }
        if (!fileUrl) {
            return res.status(400).json({ message: "A file or a valid link is required" });
        }
        // ✅ Save file URL to Database
        const response = await prisma.content.create({
            data: { link: fileUrl, type, title, userId: req.userId },
        });
        return res.status(201).json({
            message: "File uploaded successfully",
            content: response,
        });
    }
    catch (error) {
        console.error("Error uploading file:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
// ✅ Get All User Files
TestRouter.get("/", userMiddleware, async (req, res) => {
    try {
        const response = await prisma.content.findMany({
            where: { userId: req.userId },
        });
        return res.status(200).json({ response });
    }
    catch (error) {
        console.error("Error fetching content:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
// ✅ Delete File (From DB & Storage)
TestRouter.delete("/", async (req, res) => {
    try {
        const { contentId } = req.body;
        // Fetch existing content
        const content = await prisma.content.findUnique({ where: { id: contentId } });
        if (!content)
            return res.status(404).json({ message: "Content not found" });
        // Delete from Supabase Storage
        const filePath = content.link.split("/storage/v1/object/public/uploads/")[1];
        if (filePath) {
            await supabase.storage.from("uploads").remove([filePath]);
        }
        // Delete from DB
        await prisma.content.delete({ where: { id: contentId } });
        return res.status(200).json({ message: "Item Deleted Successfully" });
    }
    catch (error) {
        console.error("Error deleting content:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
export { TestRouter };
