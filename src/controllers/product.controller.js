import { Products } from "../models/Products.model.js";

export const create = async (req, res) => {
  const data = req.body;
  const newProduct = new Products(data);
  newProduct.save();
  res.status(201).json({ msg: "Role create successfully ", newProduct });
};

export const findAll = async (req, res) => {
  const products = await Products.find();
  res.status(200).json(products);
};

export const findOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.status(200).json(product);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const product = await Products.findById(id);

  if (!product) {
    const error = new Error("Product not found");
    return res.status(404).json({ msg: error.message });
  }

  product.name = data.name;
  await product.save();
  res.status(200).json({ msg: "Product update successfully ", product });
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);

  if (!role) {
    const error = new Error("Product not found");
    return res.status(404).json({ msg: error.message });
  }
  await product.deleteOne();
  res.status(200).json({ msg: "Product delete successfully " });
};
