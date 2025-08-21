import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
title: String,
description: String,
members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Project", projectSchema);