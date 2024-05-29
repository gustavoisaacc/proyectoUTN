import express from "express";
import cors from "cors";
import morgan from "morgan";

export const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
