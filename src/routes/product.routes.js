import Router from "express-promise-router";
import * as productController from "../controllers/product.controller.js";
import {
  isAuth,
  superadmin,
  validateData,
} from "../middleware/validate.middleware.js";
import { productSchema } from "../schemas/schema.js";

export const routerProduct = Router();

routerProduct.post(
  "/",
  [isAuth, superadmin, validateData(productSchema)],
  productController.create
);
routerProduct.get("/", productController.findAll);
routerProduct.get("/filter", productController.findFilter);
routerProduct.get("/:id", productController.findOne);
routerProduct.put(
  "/:id",
  validateData(productSchema),
  productController.update
);
routerProduct.delete("/:id", [isAuth, superadmin], productController.deleteOne);
