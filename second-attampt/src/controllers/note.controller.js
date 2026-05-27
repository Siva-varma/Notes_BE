import noteModel from "../models/notes.model.js";

export const postNoteController = async (req, res) => {
  let { title, description } = req.body;

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

  const newNotes = await noteModel.create({ title, description });

  return res.status(200).json({
    status: true,
    message: "notes Created successfully",
    newNotes,
  });
};

export const getNotesController = async (req, res) => {
  const allNotes = await noteModel.find();

  return res.status(201).json({
    status: true,
    message: "notes fetched successfully",
    allNotes,
  });
};

export const editNotesController = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({
      status: false,
      message: "description is required",
    });
  }
  if (description.trim().length < 10) {
    return res.status(400).json({
      status: false,
      message: "minimum length of description should be more than 10 letters",
    });
  }

  const note= await noteModel.findById(id)

  if(!note){
     return res.status(404).json({
        status:false.value,
        message:"notes not found."
     })
  }

  note.description= description
 await note.save()

  return res.status(201).json({
    status:true,
    message:"notes updated successfully",
    note
  })
};

export const deleteNotesController = async (req, res) => {
    const {id}= req.params

    const note= await noteModel.findById(id)

  if(!note){
     return res.status(404).json({
        status:false.value,
        message:"notes not found."
     })
  }

  await note.deleteOne()

  return res.status(201).json({
    status:true,
    message:"notes deleted successfully."
  })
};
