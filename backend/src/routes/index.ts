import express from "express"
import {userRouter} from "./user.js";
import { contentRouter } from "./content.js";
import { brainRouter } from "./brain.js";
import { TestRouter } from "./check.js";

const router = express.Router();

router.use("/user",userRouter);
router.use("/test",contentRouter);
router.use("/brain",brainRouter);
router.use("/content",TestRouter)

export {router};