import Router from "express-promise-router";
import { crearItems } from "../controllers/car.controller.js";

export const carRouter = Router();

carRouter.post("/items", crearItems);
