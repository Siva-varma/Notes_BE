import {Router} from 'express';
import { registerController } from '../controllers/auth.controller.js';

const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',registerController);



export default authRouter;