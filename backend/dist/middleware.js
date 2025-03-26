import jwt from "jsonwebtoken";
import { jwtsecret } from "./index.js";
export const userMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(403).json({ message: "You are not logged in" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, jwtsecret);
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: "Invalid or Expired Token" });
    }
};
