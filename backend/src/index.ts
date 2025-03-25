import express from "express"
import morgan from "morgan"
import jwt from "jsonwebtoken"
import zod from "zod"
import cors from "cors";
import bcrypt from "bcrypt"
import { router } from "./routes/index.js";


const app = express();
const port = process.env.PORT || 3000;
export const jwtsecret = "123456";
export const saltrounds = 10;

app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1/",router);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})