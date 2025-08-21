import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
text: String,
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Comment", commentSchema);