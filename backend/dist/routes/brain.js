import express from "express";
import { PrismaClient } from "@prisma/client";
import { userMiddleware } from "../middleware.js";
import RandomLinkGenerator from "../utils.js";
const brainRouter = express.Router();
const prisma = new PrismaClient();
brainRouter.post("/share", userMiddleware, async (req, res) => {
    try {
        const share = req.body.share;
        if (share) {
            const ExistingHash = await prisma.link.findUnique({
                where: {
                    userId: req.userId
                }
            });
            if (ExistingHash?.hash) {
                return res.status(200).json({
                    link: ExistingHash.hash
                });
            }
            const hashGenerator = RandomLinkGenerator(6);
            if (!hashGenerator)
                throw new Error("Failed to generate hash");
            console.log(hashGenerator);
            const NewHash = await prisma.link.create({
                data: {
                    hash: hashGenerator,
                    userId: req.userId
                }
            });
            return res.status(200).json({
                link: NewHash.hash
            });
        }
        else {
            await prisma.link.delete({
                where: {
                    userId: req.userId
                }
            });
            return res.status(200).json({
                message: "Updated Shared Link"
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
brainRouter.get("/:shareLink", userMiddleware, async (req, res) => {
    try {
        const hash = req.params.shareLink;
        const response = await prisma.link.findFirst({
            where: { hash }
        });
        if (!response) {
            return res.status(404).json({
                message: "Invalid Link Provided"
            });
        }
        const content = await prisma.content.findMany({
            where: {
                userId: response.userId
            }
        });
        const userDetail = await prisma.user.findUnique({
            where: {
                id: response.userId
            },
            select: {
                username: true
            }
        });
        return res.status(200).json({ username: userDetail?.username, content });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
export { brainRouter };
