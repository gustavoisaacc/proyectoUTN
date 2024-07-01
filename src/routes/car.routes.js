import Router from "express-promise-router";
import {
  crearItems,
  getAllOrder,
  getByOrder,
} from "../controllers/car.controller.js";

export const carRouter = Router();

carRouter.post("/items", crearItems);
carRouter.get("/order", getAllOrder);
carRouter.get("/order/:id", getByOrder);
