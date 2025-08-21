import mongoose from "mongoose";


export default async function connectDB() {
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pmtool";
try {
await mongoose.connect(uri);
console.log("✅ MongoDB Connected");
} catch (err) {
console.error("❌ DB Error:", err.message);
process.exit(1);
}
}
