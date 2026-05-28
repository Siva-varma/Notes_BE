import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookiesParser from 'cookie-parser';
import errorMiddleware from './middleware/error.middleware.js';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json());
app.use(cookiesParser());
// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Notes API!');
});

// Routes for user authentication
app.use('/api/auth', authRouter);




app.use(errorMiddleware)




export default app;