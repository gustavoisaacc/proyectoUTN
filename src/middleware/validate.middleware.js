import jwt from "jsonwebtoken";
import { ZodError } from "zod";
import { SECURITY_KEY } from "../config/config.js";
import { Users } from "../models/user.model.js";
import { Roles } from "../models/role.model.js";

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

export const validateJWT = (req, res) => {
  const token = req.cookies.accessToken;
  console.log(token);
  if (!token) {
    return res.status(401).json({ msg: "authorization denied4" });
  }

  jwt.verify(token, SECURITY_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ msg: "authorization denied3" });
    }

    req.user = user.id;
    next();
  });
};

export const superadmin = async (req, res, next) => {
  const { id } = req.user;
  const user = await Users.findById(id);
  if (!user) {
    return res.status(401).json({ msg: "authorization denied1" });
  }
  const role = await Roles.findById({ _id: { $in: user.role } });
  if (role.name !== "superadmin") {
    return res.status(401).json({ msg: "authorization denied2" });
  }
  next();
};
