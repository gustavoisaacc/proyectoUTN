import Router from "express-promise-router";
import * as categoryController from "../controllers/categoy.controller.js";
import { isAuth, superadmin } from "../middleware/validate.middleware.js";

export const routeCategory = Router();

routeCategory.post("/", [isAuth, superadmin], categoryController.create);

routeCategory.get("/", [isAuth, superadmin], categoryController.findAll);

routeCategory.get("/:id", [isAuth, superadmin], categoryController.findOne);

routeCategory.put("/:id", [isAuth, superadmin], categoryController.create);

routeCategory.delete(
  "/:id",
  [isAuth, superadmin],
  categoryController.deleteOne
);
