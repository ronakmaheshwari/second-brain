import express, { Request, Response } from "express"
import zod from "zod"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { jwtsecret, saltrounds } from "../index.js";
import {  PrismaClient } from "@prisma/client";

const userRouter = express.Router();
const prisma = new PrismaClient();

const SignupSchema = zod.object({
    username:zod.string().min(3).max(10),
    password:zod.string().min(8).max(20)
})

userRouter.post("/signup",async(req:any,res:any)=>{
    try{
        const {success} = SignupSchema.safeParse(req.body);
        if(!success){
            return res.status(404).json({
                message:"Wrong Inputs Provided"
            })
        }
        const {username,password} = req.body
        
        const ExistingUser = await prisma.user.findUnique({
            where:{
                username:username
            }
        }) 
    
        if (ExistingUser) {
            return res.status(404).json({
                message: "Username Already Exists"
            });
        }

        const hash = await bcrypt.hash(password, saltrounds);
        const newUser = await prisma.user.create({
            data:{
                username:username,
                password:hash
            }
        })
        const id = newUser.id; 
        var token = jwt.sign({id: id }, jwtsecret);
        return res.status(200).json({ 
            message:"User Successfully Added",
            token:token 
        });

    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

userRouter.post("/signin",async(req:any,res:any)=>{
    try{
        const {success} = SignupSchema.safeParse(req.body);
        if(!success){
            return res.status(404).json({
                message:"Wrong Inputs Provided"
            })
        }
        const {username, password} = req.body;

        const ExistingUser = await prisma.user.findUnique({
            where:{
                username:username
            }
        })

        if(!ExistingUser){
            return res.status(404).json({
                message: "Username Doesnt Exists"
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, ExistingUser.password);
        if(!isPasswordCorrect){
            return res.status(404).json({
                message: "Password Invalid"
            });
        }
        const id = ExistingUser.id;
        const token = jwt.sign({id: id},jwtsecret);
        return res.status(200).json({ token });
    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

export default userRouter;