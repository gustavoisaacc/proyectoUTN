import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(4, "El usuario debe contener 4 caracteres o mas"),
  password: z.string().min(6, "La contraseña debe contener 6 carcteres"),
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
});
