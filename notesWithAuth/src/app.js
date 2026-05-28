import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookiesParser from 'cookie-parser';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();
app.use(express.json());
app.use(cookiesParser());

app.get('/', (req, res) => {
  res.send('Welcome to the Notes API!');
});




app.use(errorMiddleware)




export default app;