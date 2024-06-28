import mongoose from "mongoose";
import { ProductItems } from "../models/items.model.js";
import { Products } from "../models/product.model.js";
import { Orders } from "../models/order.model.js";

export const crearItems = async (req, res) => {
  const { productId, amount } = req.body;
  console.log(productId);
  const id = new mongoose.Types.ObjectId(productId);
  const items = await Products.findById(id);
  if (!items) {
    const error = new Error("Product not found");
    return res.status(404).json({ msg: error.message });
  }
  const total = items.price * amount;
  const newItem = new ProductItems({
    productId: id,
    amount: amount,
    total: total,
  });
  await newItem.save();
  res.status(200).json(newItem);
};

export const createorder = async (req, res) => {
  const data = req.body;
  console.log(data);
};

export const getAllOrder = async (req, res) => {
  const order = await Orders.find();
  console.log(order);
  res.status(200).json(order);
};
