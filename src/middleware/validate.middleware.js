import jwt from "jsonwebtoken";
import { ZodError } from "zod";
import { SECURITY_KEY } from "../config/config.js";
import { Users } from "../models/user.model.js";
import { Roles } from "../models/role.model.js";

import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const validateData = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((issu) => ({
          issue: issu.message,
          path: issu.path,
        }))
      );
    }

    return res.status(500).json({ error: "Internal server error" });
  }
  return;
};

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "authorization denied" });
  }
  // TODO: Verify token

  jwt.verify(token, SECURITY_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid credential" });
    }
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  });
};

export const superadmin = async (req, res, next) => {
  try {
    const role = await Roles.findById(req.role);
    console.log(role.name);
    if (role.name !== "superadmin") {
      return res.status(401).json({ message: "authorization denied" });
    }
  } catch (error) {
    console.log(error);
  }
  next();
};


