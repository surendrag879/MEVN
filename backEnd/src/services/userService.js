import { userModel } from "../models/userModel.js";

///add new user
export const addNewUser = async (body) => {
  
  const userData = {
    date : new Date(),
    username: body.username,
    email: body.email,
    password: body.password
  };
    const data = new userModel(userData);
    const result = await data.save();
    return result;
}
