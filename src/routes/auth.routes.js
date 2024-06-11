import Router from "express-promise-router";
import * as authControllers from "../controllers/auth.controller.js";
import { superadmin, validateJWT } from "../middleware/validate.middleware.js";

export const authRoute = Router();

authRoute.post("/", [validateJWT, superadmin], authControllers.sigin);
