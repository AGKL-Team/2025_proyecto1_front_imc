// src/schemas/user.ts
import { z } from "zod";

export const LogInSchema = z.object({
  email: z
    .email({ message: "Invalid email" })
    .max(30, { message: "The email cannot exceed 30 characters" }),
  password: z
    .string()
    .min(6, { message: "Minimum 6 characters" })
    .max(16, { message: "Maximum 16 characters" }),
});

export type LoginData = z.infer<typeof LogInSchema>;
