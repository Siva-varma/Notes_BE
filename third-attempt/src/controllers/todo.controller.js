import noteModel from "../models/todo.model.js";

export const postTodoController = async (req, res) => {
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
        })
    }
    if (description.trim().length < 10) {
        return res.status(400).json({
            status: false,
            message: "minimum length of description should be more than 10 letters",
        })
    }

    const newTodo = await noteModel.create({ title, description });
    return res.status(201).json({
        status: true,
        message: "Todo created successfully.",
        data: newTodo
    });
};

export const getTodosController = async (req, res) => {
  const allTodos = await noteModel.find();

  return res.status(200).json({
    status: true,
    message: "Todos fetched successfully",
    allTodos,
  });   
};

export const editTodosController = async (req, res) => {
    let{id} = req.params;
    let { description} = req.body;

    if( !description) {
        return res.status(400).json({
            status: false,
            message: "Description is required.",
        })
    }

    const updatedTodo = await noteModel.findByIdAndUpdate(id, { description });

    if (!updatedTodo) {
        return res.status(404).json({
            status: false,
            message: "Todo not found.",
        });
    }

    return res.status(200).json({
        status: true,
        message: "Todo updated successfully.",
        data: updatedTodo
    });
};

export const deleteTodosController = async (req, res) => {
    let { id } = req.params;

    const deletedTodo = await noteModel.findByIdAndDelete(id);

    if (!deletedTodo) {
        return res.status(404).json({
            status: false,
            message: "Todo not found.",
        });
    }

    return res.status(200).json({
        status: true,
        message: "Todo deleted successfully.",
        data: deletedTodo
    });
};

export const isCompleteController = async (req, res) => {
    let { id } = req.params;

    const todo = await noteModel.findById(id);
    if (!todo) {
        return res.status(404).json({
            status: false,
            message: "Todo not found.",
        });
    }

    todo.isComplete = !todo.isComplete;
    await todo.save();
    return res.status(200).json({
        status: true,
        message: "Todo completion status toggled successfully.",
        data: todo
    });
}