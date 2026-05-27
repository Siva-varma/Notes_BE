import mongoose from 'mongoose';

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/NotesApp_first_attempt")
        console.log("Connected to MongoDB");        
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
    
}

export default connectDB;