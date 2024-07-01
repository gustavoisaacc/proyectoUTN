import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
  {
    products: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        description: String,
        quantity: Number,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ProductItems = mongoose.model("ProductItems", itemsSchema);
