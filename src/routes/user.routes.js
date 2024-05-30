import Router from "express-promise-router";
import * as userController from "../controllers/user.controller.js";

export const routeUser = Router();

//routes
routeUser.post("/new-user", userController.create);

routeUser.get("/", userController.findAll);

routeUser.get("/:id", userController.findById);

routeUser.put("/:id", userController.update);

routeUser.delete("/:id", userController.deletee);
