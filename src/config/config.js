import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_URL = process.env.DB_URL || "mongodb://localhost/aifos-db";
export const SECURITY_KEY = process.env.SECURITY_KEY || "secret";
