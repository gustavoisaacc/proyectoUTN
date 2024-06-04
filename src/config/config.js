import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_URL = process.env.DB_URL || "mongodb://localhost/aifos-db";
export const JWT_SECRET = process.env.JWT_SECRET || "secret";
