import { ProductItems } from "../models/items.model.js";
import { Orders } from "../models/order.model.js";

export const crearItems = async (req, res) => {
  const { products, customerInfo } = req.body;
  let total = 0;
  let orderNumber = 0;
  const newCart = new ProductItems({
    products: products.map((product) => ({
      ...product,
    })),
  });
  products.forEach((product) => {
    total += product.price;
  });
  const counter = await Orders.find();
  orderNumber = counter.length + 1;
  try {
    const order = new Orders({
      user: customerInfo.user,
      orderid: newCart._id,
      metodo: customerInfo.metodo,
      total,
      orderNumber,
    });
    await newCart.save();
    await order.save();
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el carrito", error });
  }
  res.status(201).json({ msg: "Su Orden fue tomada exitosamnete" });
};

export const getAllOrder = async (req, res) => {
  const order = await Orders.find();
  res.status(200).json(order);
};

export const getByOrder = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const order = await Orders.findById(id).populate("orderid");

  res.status(200).json(order);
};
