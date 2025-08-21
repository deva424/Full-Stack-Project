import jwt from "jsonwebtoken";
import User from "../models/User.js";


export default async function auth(req, res, next) {
const token = req.header("Authorization")?.replace("Bearer ", "");
if (!token) return res.status(401).json({ message: "No token" });


try {
const payload = jwt.verify(token, process.env.JWT_SECRET || "secret123");
req.user = await User.findById(payload.id).select("-password");
next();
} catch {
res.status(401).json({ message: "Invalid token" });
}
}