import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Users = mongoose.model("Users", userSchema);
