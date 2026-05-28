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
  let allNotes = await noteModel.find({userId:userId});
  return allNotes;
};

//service fn to edit the notes
export const editNotesService = async (userId, noteId, data) => {
  let description = data.description;

  // ----validations ------
  if (!description) {
    return res.status(400).json({
      status: false,
      message: "description is required.",
    });
  }
  if (description.trim().length < 10) {
    return res.status(400).json({
      status: false,
      message: "minimum length of description should be more than 10 letters",
    });
  }

  //check is notes exists or not
  let isNoteExists = await noteModel.findById(noteId);

  if (!isNoteExists) throw new apiError(404, "notes not found");
// update the notes in db
  let updatedNotes = await noteModel.updateOne(
    { _id: noteId },
    {
      description: description,
    },
  );

  return updatedNotes
};


//service fn to delete the notes
export const deleteNotesService = async (userId, noteId) => {


  //check is notes exists or not
  let isNoteExists = await noteModel.findById(noteId);

  if (!isNoteExists) throw new apiError(404, "notes not found");

  //delete the notes from db
  await noteModel.findByIdAndDelete(noteId)
 return

};
