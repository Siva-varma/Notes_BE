import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  isComplete: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("todos", todoSchema);

export default todoModel;
