import {
  createNotesService,
  editNotesService,
  getAllNotesService,
} from "../services/notes.service.js";
import asyncHandler from "../utils/asyncHandler.js";

// -------- Controller to create a notes -------------
export const createNotesController = asyncHandler(async (req, res) => {
  // Call the service to create a notes
  let notes = await createNotesService(req.user.id, req.body);
  // send the res to the User/client
  return res.status(201).json({
    status: true,
    message: "note created successfully",
    notes,
  });
});

// -------- Controller to get all the notes -------------
export const getAllNotesController = asyncHandler(async (req, res) => {
  //Call the service to get all notes
  let allNotes = await getAllNoteService(req.user.id);
  // send all notes to user
  res.status(200).json({
    status: true,
    message: "all notes fetched successfully",
    allNotes,
  });
});


