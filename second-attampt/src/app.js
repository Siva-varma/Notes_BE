import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import notesRoutes from "./routes/note.route.js";


const app = express();

app.use(express.json());

app.use("/api/notes", notesRoutes)





export default app;