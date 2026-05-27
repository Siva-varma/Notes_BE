import { Router } from "express";
import { deleteTodosController,editTodosController, getTodosController, postTodoController,isCompleteController } from "../controllers/todo.controller.js";

let todosRoutes = Router();

//Create API -> api/todos/
todosRoutes.post('/', postTodoController)

//Get API -> api/todos/
todosRoutes.get("/",getTodosController)

//Edit API -> api/todos/:id
todosRoutes.patch('/:id', editTodosController)

//Delete API -> api/todos/:id
todosRoutes.delete('/:id', deleteTodosController)

//isComplete API -> api/todos/:id/complete
todosRoutes.patch('/:id/complete', isCompleteController )




export default todosRoutes;