import express from "express";
import {loginAdmin} from "../controller/loginController.js";

export const loginRouter = express.Router();

//student router
loginRouter.post("/login", loginAdmin);