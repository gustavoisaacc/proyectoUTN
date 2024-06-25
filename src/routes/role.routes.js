import Router from "express-promise-router";
import * as roleController from "../controllers/roles.controller.js";
import { isAuth, superadmin } from "../middleware/validate.middleware.js";

export const routeRole = Router();

routeRole.post("/", [isAuth, superadmin], roleController.create);
routeRole.get("/", [isAuth], roleController.findAll);
routeRole.get("/:id", [isAuth, superadmin], roleController.findOne);
routeRole.put("/:id", [isAuth, superadmin], roleController.update);
routeRole.delete("/:id", [isAuth, superadmin], roleController.deleteOne);
