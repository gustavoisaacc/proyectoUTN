import Router from "express-promise-router";
import * as categoryController from "../controllers/categoy.controller.js";

export const routeCategory = Router();

routeCategory.post("/", categoryController.create);

routeCategory.get("/", categoryController.findAll);

routeCategory.get("/:id", categoryController.findOne);

routeCategory.put("/:id", categoryController.create);

routeCategory.delete("/:id", categoryController.deleteOne);
