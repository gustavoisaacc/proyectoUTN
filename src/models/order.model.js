import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Types.ObjectId,
    ref: "ProductItems",
    required: true,
  },
  orderNumber: {
    type: Number,
    default: 1,
  },
  user: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const Orders = mongoose.model("Orders", orderSchema);
