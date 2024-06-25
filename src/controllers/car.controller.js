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
  const { items, user } = req.body;
  let totalF = 0;
  let orderNumber = 1;

  try {
    // Calcular el total de la orden
    const amount = await Orders.find();
    for (const orderItem of items) {
      const id = new mongoose.Types.ObjectId(orderItem);
      const item = await ProductItems.findById(id);
      if (!item) {
        return res.status(404).send(`Item with ID ${id} not found`);
      }
      totalF += item.total;
    }
    orderNumber += amount.length;
    let total = totalF;

    const order = new Orders({ orderId: items, total, user, orderNumber });
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
