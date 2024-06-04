import Router from "express-promise-router";
import * as roleController from "../controllers/roles.controller.js";

export const routeRole = Router();

routeRole.post("/new-role", roleController.create);
routeRole.get("/", roleController.findAll);
routeRole.get("/:id", roleController.findOne);
routeRole.put("/:id", roleController.update);
routeRole.delete("/:id", roleController.deleteOne);
