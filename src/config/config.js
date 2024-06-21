import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/test";
export const SECURITY_KEY = process.env.SECURITY_KEY || "secret";
