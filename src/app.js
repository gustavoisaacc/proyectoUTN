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
  if (err.code === 11000) {
    res.status(401).json({
      message: "Duplicate value entered for the field",
    });
  } else {
    res.status(err.status || 500).json({
      message: err.message || "Something went wrong",
    });
  }
});
