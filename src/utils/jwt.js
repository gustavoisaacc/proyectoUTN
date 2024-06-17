import jwt from "jsonwebtoken";
import { SECURITY_KEY } from "../config/config.js";

export const createAccessToken = async (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      id,
      SECURITY_KEY,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
