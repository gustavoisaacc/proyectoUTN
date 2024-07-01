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
  name: z
    .string()
    .min(4, "El nombre del produto debe contener al menos 5 caracteres o mas"),
  price: z.number().int(),
  category: z.string(),
  description: z.string(),
});

export const userUpdateSchema = z.object({
  name: z
    .string()
    .min(4, "El nombre del produto debe contener al menos 5 caracteres o mas"),
  price: z.number().int(),
  category: z.string(),
  description: z.string().optional(),
});

export const productUpdateSchema = (product) => {
  const result = productSchema.safeParse(product);
  return result;
};
