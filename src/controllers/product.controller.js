import { Categories } from "../models/categoy.model.js";
import { Products } from "../models/product.model.js";

export const create = async (req, res) => {
  const data = req.body;
  const newProduct = new Products(data);
  console.log(newProduct);

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
  res.status(201).json({ msg: "Product create successfully ", newProduct });
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
  try {
    const { product } = req.query;
    console.log("Producto recibido:", product);

    if (product) {
      const search = await Categories.findOne({ name: product });
      if (search) {
        console.log("Categoría encontrada:", search._id);
        const products = await Products.find({ category: search._id });
        console.log("Productos recibido:", products);
        return res.status(200).json(products);
      } else {
        console.log("Categoría no encontrada para el producto:", product);
        const error = new Error("Producto no encontrado");
        res.status(404).json({ msg: error.message });
      }
    } else {
      const products = await Products.find();
      res.status(200).json(products);
    }
  } catch (error) {
    console.error("Error en findFilter:", error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
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
