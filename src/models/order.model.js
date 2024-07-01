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
  orderid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductItems",
  },

  orderNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  metodo: {
    type: String,
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
