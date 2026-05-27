import mongoose from "mongoose";
const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb connected successfully");
        
    } catch (err) {
        console.log("Error in mongodb connection", err);
    }
}
export default connectDB;