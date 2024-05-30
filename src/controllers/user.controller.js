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
  const findUser = await User.findById(id);

  if (!findUser) {
    console.log("no existe el usuario");
  }

  console.log(data);
};

export const deletee = (req, res) => {
  console.log("eliminar usuario por id");
};
