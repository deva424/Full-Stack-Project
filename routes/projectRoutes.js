import express from "express";
import auth from "../middleware/auth.js";
import Project from "../models/Project.js";

const router = express.Router();

// Create Project
router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;
  const project = await Project.create({
    title,
    description,
    members: [req.user._id],
    createdBy: req.user._id
  });
  res.json(project);
});

// Get user's projects
router.get("/", auth, async (req, res) => {
  const projects = await Project.find({ members: req.user._id });
  res.json(projects);
});

export default router;
