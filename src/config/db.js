import mongoose from "mongoose";
import { DB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(DB_URL);
    console.log(`${connection.host}:${connection.port}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
