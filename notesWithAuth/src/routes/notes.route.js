import { Router } from "express";
import {
  createNotesController,
  editNotesController,
  getAllNotesController,
  deleteNotesController,
} from "../controllers/notes.controller.js";
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
noteRouter.get("/", authMiddleware, getAllNotesController);

/**
 * @route EDIT /api/notes/:id
 * @desc used to edit a Notes
 * @access Private protected route
 */
noteRouter.patch("/:id", authMiddleware, editNotesController);

/**
 * @route DELETE /api/notes/:id
 * @desc used to delete a Notes
 * @access Private protected route
 */
noteRouter.delete("/:id", authMiddleware, deleteNotesController);

export default noteRouter;
