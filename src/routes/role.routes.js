import Router from "express-promise-router";
import * as roleController from "../controllers/roles.controller.js";
import { isAuth, superadmin } from "../middleware/validate.middleware.js";

export const routeRole = Router();

routeRole.post("/", roleController.create);
routeRole.get("/", roleController.findAll);
routeRole.get("/:id", roleController.findOne);
routeRole.put("/:id", roleController.update);
routeRole.delete("/:id", roleController.deleteOne);
