import { ObjectId } from "mongodb";
import { Users } from "../models/user.model.js";
import { compare } from "../utils/encryptPassword.js";
import { createAccessToken } from "../utils/jwt.js";

export const sigin = async (req, res) => {
  const { name, password } = req.body;
  const user = await Users.findOne({ name }).populate("role");

  if (!user) {
    const error = new Error("check your email or password");
    res.status(404).json({ msg: error.message });
  }

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    const error = new Error("check your email or password");
    res.status(401).json({ msg: error.message });
  }

  const token = await createAccessToken({ id: user._id, role: user.role });

  res.cookie("token", token, {
    httpOnly: true,
    //secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.json({ message: "Logged in", token, user });
};

export const signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "logout" });
};

export const profile = async (req, res) => {
  const userId = new ObjectId(req.userId);
  console.log(userId);
  const user = await Users.findById(userId);
  res.status(200).json(user);
};
