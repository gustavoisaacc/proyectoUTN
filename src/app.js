import express from "express";
import cors from "cors";
import morgan from "morgan";

import { routeUser } from "./routes/user.routes.js";
import { connectDB } from "./config/db.js";
import { config } from "dotenv";

export const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

config();
connectDB();

// Routes
app.use("/api/v1/users", routeUser);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
