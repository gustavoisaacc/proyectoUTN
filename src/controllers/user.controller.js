import { Users } from "../models/user.model.js";
import { hash } from "../utils/encryptPassword.js";

export const create = async (req, res) => {
  const data = req.body;
  const newUser = new Users(data);
  newUser.password = hash(data.password);
  try {
    if (data.role) {
      const foundRole = await Role.findOne({ name: { $in: data.role } });
      if (!foundRole)
        return res.status(400).json({ message: "role not found" });
      newUser.role = Array(foundRole).map((role) => role?._id);
    } else {
      const role = await Role.findOne({ name: "customer" });
      newUser.role = [role?._id];
    }
  } catch (error) {
    next(error);
  }
  await newUser.save();
  res.status(201).json({ msg: "usuario creado", newUser });
};

export const findAll = async (req, res) => {
  const user = await Users.find();
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
  const findUser = await Users.findById(id);

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
  const findUser = await Users.findById(id);

  if (!findUser) {
    const error = new Error("User not found");
    res.status(404).json({ msg: error.message });
  }

  await findUser.deleteOne();

  res.status(200).json({ msg: "user deleted successfully" });
};
