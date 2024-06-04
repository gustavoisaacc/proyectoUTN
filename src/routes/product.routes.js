import Router from "express-promise-router";
import * as productController from "../controllers/product.controller.js";

export const routerProduct = Router();

routerProduct.post("/new-product", productController.create);
routerProduct.get("/", productController.findAll);
routerProduct.get("/:id", productController.findOne);
routerProduct.put("/:id", productController.update);
routerProduct.delete("/:id", productController.deleteOne);
