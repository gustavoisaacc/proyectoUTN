import jwt from "jsonwebtoken";
import { SECURITY_KEY } from "../config/config.js";

export const createToken = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECURITY_KEY, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
