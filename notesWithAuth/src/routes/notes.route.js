import { Router } from "express";
import { createNotesController, editNotesController, getAllNotesController } from "../controllers/notes.controller.js";
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


/**
 * @route EDIT /api/notes/:id
 * @desc edit Notes
 * @access Private protected route
 */
noteRouter.patch('/:id', authMiddleware, editNotesController)


export default noteRouter;
