import noteModel from "../models/notes.model.js";
import apiError from "../utils/apiError.js";

// service fn to create a note
export const createNotesService = async (userId, data) => {
  let title = data.title;
  let description = data.description;
  // ----validations ------
  if (!title || !description) {
    return res.status(400).json({
      status: false,
      message: "All fields are required.",
    });
  }
  if (title.trim().length < 3) {
    return res.status(400).json({
      status: false,
      message: "minimum length of title should be more than 3 letters",
    });
  }
  if (description.trim().length < 10) {
    return res.status(400).json({
      status: false,
      message: "minimum length of description should be more than 10 letters",
    });
  }
  // create a notes in the db
  const newNotes = await noteModel.create({
    title: title,
    description: description,
    userId: userId,
  });

  return newNotes;
};

// service fn to get all the notes
export const getAllNotesService = async (userId) => {
  allNotes = await noteModel.find(userId);
  return allNotes;
};


