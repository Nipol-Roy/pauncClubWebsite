/** @format */

import mongoose from "mongoose";

const ConnectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/paunc");
    console.log("mongodb was connected");
  } catch (err) {
    console.log("mongodb connection faile ", err);
  }
};
export default ConnectDB;
