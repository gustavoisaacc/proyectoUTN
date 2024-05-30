import mongoose from "mongoose";
import { DB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://gustavoisaac:321499585@cluster0.omucu.mongodb.net/demo1"
    );
    console.log(`${connection.host}:${connection.port}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
