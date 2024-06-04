import { Categories } from "../models/categoy.model.js";

export const create = async (req, res) => {
  const data = req.body;
  const newCategory = new Categories(data);
  newCategory.save();
  res.status(201).json({ msg: "Category create successfully ", newCategory });
};

export const findAll = async (req, res) => {
  const categories = await Categories.find();
  res.status(200).json(categories);
};

export const findOne = async (req, res) => {
  const { id } = req.params;
  const category = await Categories.findById(id);
  res.status(200).json(category);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const category = await Categories.findById(id);

  if (!category) {
    const error = new Error("Category not found");
    return res.status(404).json({ msg: error.message });
  }

  category.name = data.name;
  await category.save();
  res.status(200).json({ msg: "Category update successfully ", category });
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;
  const category = await Categories.findById(id);

  if (!category) {
    const error = new Error("Category not found");
    return res.status(404).json({ msg: error.message });
  }
  await category.deleteOne();
  res.status(200).json({ msg: "Category delete successfully " });
};
