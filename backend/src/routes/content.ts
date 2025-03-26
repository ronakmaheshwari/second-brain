import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import zod from "zod";
import { userMiddleware } from "../middleware.js";

const contentRouter = express.Router();
const prisma = new PrismaClient();
contentRouter.use(express.json()); 

const ContentSchema = zod.object({
  link: zod.string().url(),
  type: zod.string(),
  title: zod.string(),
});

contentRouter.post("/", userMiddleware, async (req: any, res: any) => {
  try {
    console.log(req.body);
    const parsedData = ContentSchema.safeParse(req.body);
    console.log(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        message: "Invalid input data",
        errors: parsedData.error.format(),
      });
    }

    const { link, type, title } = parsedData.data;

    const response = await prisma.content.create({
      data: {
        link,
        type,
        title,
        userId: req.userId, // Ensure `req.userId` is coming from `userMiddleware`
      },
    });

    return res.status(201).json({
      message: "Data added successfully",
      content: response,
    });
  } catch (error) {
    console.error("Error creating content:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ No need to modify GET and DELETE routes since they do not use 'tags'
contentRouter.get("/", userMiddleware, async (req: any, res: any) => {
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

contentRouter.delete("/", async (req: any, res: any) => {
  try {
    const { contentId } = req.body;

    await prisma.content.delete({
      where: { id: contentId },
    });

    return res.status(200).json({
      message: "Item Deleted Successfully",
    });
  } catch (error) {
    console.error("Error deleting content:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export { contentRouter };
