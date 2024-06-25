import { ProductItems } from "../models/items.model.js";
import { Products } from "../models/product.model.js";

export const crearItems = async (req, res) => {
  const { id, amount } = req.body;
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

export const order = async (req, res) => {
  const { items } = req.body;
  let total = 0;

  try {
    // Calcular el total de la orden
    for (const orderItem of items) {
      const item = await Item.findById(orderItem.item);
      if (!item) {
        return res.status(404).send(`Item with ID ${orderItem.item} not found`);
      }
      total += item.price * orderItem.quantity;
    }

    const order = new Order({ items, total });
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
