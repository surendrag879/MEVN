import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "school"
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    // console.log("db sucessfully connected...");
  } catch (err) {
    console.log("Error:", err);
  }
};

export default connectdb;
