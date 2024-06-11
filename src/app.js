import express from "express";
import cors from "cors";
import morgan from "morgan";

import { routeUser } from "./routes/user.routes.js";
import { routeRole } from "./routes/role.routes.js";
import { routeCategory } from "./routes/category.routes.js";
import { routerProduct } from "./routes/product.routes.js";

import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import { createCategories, createRoles } from "./utils/initialState.js";
export const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

config();
connectDB();
createRoles();
createCategories();

// Routes
app.use("/api/v1/users", routeUser);
app.use("/api/v1/role", routeRole);
app.use("/api/v1/product", routerProduct);
app.use("/api/v1/category", routeCategory);

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
