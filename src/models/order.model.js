import mongoose from "mongoose";
const StatusOrder = {
  PENDING: "pendiente",
  PROCESSING: "en proceso",
  DELIVERED: "completo",
};
const orderSchema = new mongoose.Schema({
  user: {
    type: Number,
    required: true,
  },
  orderId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ProductItems",
      required: true,
      quantity: Number,
    },
  ],
  orderNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: StatusOrder.PENDING,
    enum: [StatusOrder.PENDING, StatusOrder.PROCESSING, StatusOrder.DELIVERED],
  },
});

export const Orders = mongoose.model("Orders", orderSchema);
