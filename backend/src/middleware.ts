import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtsecret } from "./index.js";

if (!jwtsecret) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

declare module "express-serve-static-core" {
  interface Request {
    userId?: number;
  }
}

export const userMiddleware = (req: any, res: any, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({ message: "You are not logged in" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, jwtsecret) as { id: number };
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or Expired Token" });
  }
};
