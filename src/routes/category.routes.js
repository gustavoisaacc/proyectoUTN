import Router from "express-promise-router";
import * as categoryController from "../controllers/categoy.controller.js";
import { isAuth, superadmin } from "../middleware/validate.middleware.js";

export const routeCategory = Router();

routeCategory.post("/", categoryController.create);

routeCategory.get("/", categoryController.findAll);

routeCategory.get("/:id", categoryController.findOne);

routeCategory.put("/:id", categoryController.update);

routeCategory.delete("/:id", categoryController.deleteOne);
