import Router from "express-promise-router";
import { crearItems, createorder } from "../controllers/car.controller.js";

export const carRouter = Router();

carRouter.post("/items", crearItems);
carRouter.post("/order", createorder);
