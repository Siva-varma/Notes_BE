import { createNotesService } from "../services/notes.service.js";
import asyncHandler from "../utils/asyncHandler.js";

// -------- Controller to create a notes -------------
export const createNotesController = asyncHandler(async (req, res) => {
  // Call the service to create a post for the user
  let notes = await createNotesService(req.user.id, req.body);
  // send the res to the User/client
  return res.status(201).json({
    status: true,
    message: "note created successfully",
    notes,
  });
});


