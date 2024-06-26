import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

import { routeUser } from "./routes/user.routes.js";
import { routeRole } from "./routes/role.routes.js";
import { routeCategory } from "./routes/category.routes.js";
import { routerProduct } from "./routes/product.routes.js";
import { authRoute } from "./routes/auth.routes.js";
import { carRouter } from "./routes/car.routes.js";

import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import { createCategories, createRoles } from "./utils/initialState.js";

export const app = express();
app.use(morgan("dev"));
const secretKey = "yourSecretKey";

// Configura cookie-parser middleware
app.use(cookieParser(secretKey));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

config();
connectDB();
createRoles();
createCategories();

// Routes
app.use("/api/v1/users", routeUser);
app.use("/api/v1/role", routeRole);
app.use("/api/v1/product", routerProduct);
app.use("/api/v1/category", routeCategory);
app.use("/api/v1/", authRoute);
app.use("/api/v1/", carRouter);

// Error handling
app.use((err, req, res, next) => {
  if (err.code === 11000) {
    res.status(401).json({
      message: "User already exists",
    });
  } else {
    res.status(err.status || 500).json({
      message: err.message || "Something went wrong",
    });
  }
});
