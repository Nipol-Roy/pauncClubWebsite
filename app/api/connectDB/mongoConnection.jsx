/** @format */

import mongoose from "mongoose";

const ConnectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed", err);
    throw err;
  }
};

export default ConnectDB;
