import Router from "express-promise-router";
import * as userController from "../controllers/user.controller.js";
import {
  isAuth,
  superadmin,
  validateData,
} from "../middleware/validate.middleware.js";
import { userSchema } from "../schemas/schema.js";

export const routeUser = Router();

//routes
routeUser.post("/", validateData(userSchema), userController.create);

routeUser.get("/", userController.findAll);

routeUser.get("/:id", userController.findById);

routeUser.put("/:id", userController.update);

routeUser.delete("/:id", userController.deletee);
