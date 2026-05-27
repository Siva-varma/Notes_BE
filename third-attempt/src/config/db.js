import mongoose from "mongoose";



export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to database successfully");
    } catch (err) {
        console.log("error connecting to database", err);
    }
}