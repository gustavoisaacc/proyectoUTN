import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["superadmin", "admin", "user"]),
});
