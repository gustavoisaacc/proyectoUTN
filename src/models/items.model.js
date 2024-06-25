import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
  {
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
    ],
    amount: {
      type: Number,
      required: true,
      trim: true,
      default: 1,
    },
    total: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductItems = mongoose.model("ProductItems", itemsSchema);
