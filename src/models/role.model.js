import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

export const Roles = mongoose.model("Roles", roleSchema);
