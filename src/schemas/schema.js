import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(4),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.string(),
});

export const roleSchema = z.object({
  name: z.string().min(4),
});

export const categorySchema = z.object({
  name: z.string().min(4),
});

export const productSchema = z.object({
  name: z.string().min(4),
  price: z.number(),
  category: z.string(),
  description: z.string(),
  image: z.string(),
});
