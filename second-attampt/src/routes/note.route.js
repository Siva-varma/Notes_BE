import { Router } from "express";
import { getNotesController, postNoteController,editNotesController, deleteNotesController } from "../controllers/note.controller.js";

let notesRoutes = Router();

//Post API -> api/notes/
notesRoutes.post('/', postNoteController)

//Get API -> api/notes/
notesRoutes.get("/",getNotesController)

//Edit API -> api/notes/:id
notesRoutes.patch('/:id', editNotesController)

//Delete API -> api/notes/:id
notesRoutes.delete('/:id', deleteNotesController)




export default notesRoutes;
