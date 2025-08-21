import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
title: String,
description: String,
project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Task", taskSchema);