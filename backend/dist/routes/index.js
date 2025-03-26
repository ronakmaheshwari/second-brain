import express from "express";
import { userRouter } from "./user.js";
import { contentRouter } from "./content.js";
import { brainRouter } from "./brain.js";
const router = express.Router();
router.use("/user", userRouter);
router.use("/content", contentRouter);
router.use("/brain", brainRouter);
export { router };
