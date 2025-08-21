import express from "express";
import auth from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// Get current user
router.get("/me", auth, async (req, res) => {
  res.json(req.user);
});

// Get all users
router.get("/all", auth, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

export default router;
