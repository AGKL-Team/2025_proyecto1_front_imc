// src/schemas/user.ts
import { z } from "zod";

export const LogInSchema = z.object({
  email: z
    .email({ message: "Email inválido" })
    .max(255, { message: "El email no puede exceder los 255 carácteres" }),
  password: z
    .string()
    .min(8, { message: "Mínimo 8 carácteres" })
    .max(16, { message: "Máximo 16 carácteres" }),
});

export type LoginData = z.infer<typeof LogInSchema>;
