import {Router} from 'express';
import { loginController, registerController } from '../controllers/auth.controller.js';

const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',registerController);

/**
 * @route POST /api/auth/login
 * @desc login the user
 * @access Public
 */
authRouter.post('/login', loginController)



export default authRouter;