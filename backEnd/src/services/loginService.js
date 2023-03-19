import { userModel } from "../models/userModel.js";
import express from "express";
const app = express();

//login
export const login = async (body) => {
  // console.log('login service', body)
  const result = await userModel.findOne({
    email: body.email,
    password: body.password,
  });
  return result;
};

// logout
// export const logout = async (session) =>{
//    return session.destroy();
// }
