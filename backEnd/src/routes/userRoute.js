import express from 'express';

import { addUser} from "../controller/userController.js";

//export userRouter
export const userRouter = express.Router();

//api called...
userRouter.post('/user/add',addUser);