import { User } from "../models/user.model.js";

export const create = async (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  await newUser.save();
  res.status(201).json({ msg: "usuario creado", newUser });
};

export const findAll = async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
};

export const findById = (req, res) => {
  const { id } = req.params;
  const user = User.findById(id);
  res.status(200).json(user);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  //verificar si existe el usuario
  const findUser = await User.findById(id);

  if (!findUser) {
    const error = new Error("User not found");
    res.status(404).json({ msg: error.message });
  }

  findUser.name = data.name || findUser.name;
  findUser.password = data.password || findUser.password;

  await findUser.save();
  res.status(200).json({ msg: "user updated successfully", findUser });
};

export const deletee = async (req, res) => {
  const { id } = req.params;
  const findUser = await User.findById(id);

  if (!findUser) {
    const error = new Error("User not found");
    res.status(404).json({ msg: error.message });
  }

  await findUser.deleteOne();

  res.status(200).json({ msg: "user deleted successfully" });
};
