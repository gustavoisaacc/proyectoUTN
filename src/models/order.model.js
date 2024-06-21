import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: Number,
    required: true,
  },
  orderId: {
    type: mongoose.Types.ObjectId,
    ref: "ProductItems",
    required: true,
  },
  orderNumber: {
    type: Number,
    default: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const Orders = mongoose.model("Orders", orderSchema);
