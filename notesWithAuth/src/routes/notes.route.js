import { Router } from "express";
import { createNotesController, getAllNotesController } from "../controllers/notes.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

let noteRouter = Router();
/**
 * @route POST /api/notes
 * @desc Create a notes
 * @access Private protected route
 */
noteRouter.post("/", authMiddleware, createNotesController);

/**
 * @route Get /api/notes
 * @desc get all notes 
 * @access Private protected route
 */
noteRouter.get('/', authMiddleware, getAllNotesController);


export default noteRouter;
