import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const noteModel = mongoose.model("notes", noteSchema);

export default noteModel;
