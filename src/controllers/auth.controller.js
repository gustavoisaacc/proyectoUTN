import { Users } from "../models/user.model.js";
import { compare } from "../utils/encryptPassword.js";
import { createAccessToken } from "../utils/jwt.js";

export const sigin = async (req, res) => {
  const { name, password } = req.body;
  const user = await Users.findOne({ name });

  if (!user) {
    const error = new Error("Invalid username");
    res.status(404).json({ msg: error.message });
  }

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    const error = new Error("check your email or password");
    res.status(401).json({ msg: error.message });
  }

  const token = await createAccessToken({ id: user._id });

  res.cookie("token", token, {
    //httpOnly: true,
    sameSite: "none",
    //secure: true,
    maxAge: 24 * 60 * 60 * 100, //1 day
  });

  res.json({ message: "Logged in", token });
};

export const signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "logout" });
};
