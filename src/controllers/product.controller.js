import { Categories } from "../models/categoy.model.js";
import { Products } from "../models/product.model.js";

export const create = async (req, res) => {
  const data = req.body;
  const newProduct = new Products(data);

  if (data.category) {
    const foundCategory = await Categories.findOne({
      name: { $in: data.category },
    });
    if (!foundCategory) {
      const error = new Error("Category not found");
      return res.status(404).json({ msg: error.message });
    }
    newProduct.category = foundCategory._id;
  }

  await newProduct.save();
  res.status(201).json({ msg: "Role create successfully ", newProduct });
};

export const findAll = async (req, res) => {
  const products = await Products.find().populate("category");
  res.status(200).json(products);
};

export const findOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.status(200).json(product);
};

export const findFilter = async (req, res) => {
  const { name } = req.query;
  const products = await Products.find({ name });
  res.status(200).json(products);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const product = await Products.findById(id);

  if (!product) {
    const error = new Error("Product not found");
    return res.status(404).json({ msg: error.message });
  }
  if (data.category) {
    const foundCategory = await Categories.findOne({
      name: { $in: data.category },
    });
    if (!foundCategory) {
      const error = new Error("Category not found");
      return res.status(404).json({ msg: error.message });
    }
    newProduct.category = foundCategory._id;
  }

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
