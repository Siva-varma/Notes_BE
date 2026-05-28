import { Router } from "express";
import { createNotesController } from "../controllers/notes.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

let noteRouter = Router();
/**
 * @route POST /api/notes
 * @desc Create a note 
 * @access Private protected route
 */
noteRouter.post("/", authMiddleware, createNotesController);

export default noteRouter;
