import express from "express";
import noteModel from "../models/notes.model.js";

const app = express();
app.use(express.json());

// Post api/notes
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  // ----validations ------

  if (!title) {
    return res.status(400).json({
      status: false,
      message: "title is required.",
    });
  }

  if (!description) {
    return res.status(400).json({
      status: false,
      message: "description is required.",
    });
  }

  if (title.trim().length < 3) {
    return res.status(400).json({
      status: false,
      message: "title must be more than 3 letters.",
    });
  }

  if (description.trim().length < 10) {
    return res.status(400).json({
      status: false,
      message: "title must be more than 10 letters.",
    });
  }
  // create a note in db
  const newNote = await noteModel.create({ title, description });

  return res.status(201).json({
    status: true,
    message: "note created successfully",
  });
});

// Get api/notes
app.get("/api/notes", async (req, res) => {
  const allNotes = await noteModel.find();

  return res.status(200).json({
    status: true,
    message: "notes fetched successfully",
    allNotes,
  });
});

//Patch api/notes/:id
app.patch("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({
      status: false,
      message: "description is required.",
    });
  }

  if (description.trim().length < 10) {
    return res.status(400).json({
      status: false,
      message: "description must be more than 10 letters.",
    });
  }

  const note = await noteModel.findById(id);

  if (!note) {
    return res.status(404).json({
      status: false,
      message: "notes not found",
    });
  }

  note.description = description;
  await note.save();

  return res.status(200).json({
    status: true,
    message: "notes edited successfully",
    note,
  });
});

//Delete api/notes/:id
app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;

  const note = await noteModel.findById(id);

  if (!note) {
    return res.status(404).json({
      status: false,
      message: "notes not found",
    });
  }
  await note.deleteOne();

  return res.status(201).json({
    status: true,
    message: "notes deleted successfully",
  });
});

export default app;
