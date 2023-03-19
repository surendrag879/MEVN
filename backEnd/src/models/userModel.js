import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
  date: Date,
  username: String,
  email: String,
  password: String,
});

//export usermodel
export const userModel = mongoose.model("users", userSchema);
