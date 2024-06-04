import { Roles } from "../models/role.model.js";

export const create = async (req, res) => {
  const data = req.body;
  const newRole = new Roles(data);
  newRole.save();
  res.status(201).json({ msg: "Role create successfully ", newRole });
};

export const findAll = async (req, res) => {
  const roles = await Roles.find();
  res.status(200).json(roles);
};

export const findOne = async (req, res) => {
  const { id } = req.params;
  const role = await Roles.findById(id);
  res.status(200).json(role);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const role = await Roles.findById(id);

  if (!role) {
    const error = new Error("Role not found");
    return res.status(404).json({ msg: error.message });
  }

  role.name = data.name;
  await role.save();
  res.status(200).json({ msg: "Role update successfully ", role });
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;
  const role = await Roles.findById(id);

  if (!role) {
    const error = new Error("Role not found");
    return res.status(404).json({ msg: error.message });
  }
  await role.deleteOne();
  res.status(200).json({ msg: "Role delete successfully " });
};
