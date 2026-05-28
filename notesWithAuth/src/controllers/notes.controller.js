import asyncHandler from "../utils/asyncHandler.js";


// -------- Controller to create a notes -------------
export const createNotesController = asyncHandler(async (req,res) => {
    res.status(200).json('working')
})