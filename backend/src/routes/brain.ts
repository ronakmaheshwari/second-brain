import express, { Request, Response } from "express"
import {  PrismaClient } from "@prisma/client";
import { userMiddleware } from "../middleware.js";

const brainRouter = express.Router();
const prisma = new PrismaClient();

brainRouter.post("/share",userMiddleware,async(req:any,res:any)=>{
    try{
        
    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})