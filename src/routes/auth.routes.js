import Router from "express-promise-router";
import * as authControllers from "../controllers/auth.controller.js";

export const authRoute = Router();

authRoute.post("/signin", authControllers.sigin);
authRoute.post("/signout", authControllers.signOut);
