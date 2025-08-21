import express from "express";
import auth from "../middleware/auth.js";
import Task from "../models/Task.js";

const router = express.Router();

// Create Task
router.post("/", auth, async (req, res) => {
  const { title, project, assignees } = req.body;
  const task = await Task.create({ title, project, assignees, createdBy: req.user._id });
  res.json(task);
});

// Get tasks for project
router.get("/:projectId", auth, async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId });
  res.json(tasks);
});

export default router;
