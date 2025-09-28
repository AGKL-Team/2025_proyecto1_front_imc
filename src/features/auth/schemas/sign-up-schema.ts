import { z } from "zod";
import { selectRequiredNumber } from "../../../shared/utils/required-number";

export const SignUpSchema = z
  .object({
    email: z
      .email({ message: "Email inválido" })
      .max(255, { message: "El email no puede exceder los 255 carácteres" }),
    password: z.string({ message: "Contraseña inválida" }).refine(
      (value) => {
        return (
          value.length >= 8 &&
          value.length <= 16 &&
          /\d/.test(value) &&
          /[a-z]/.test(value) &&
          /[A-Z]/.test(value)
        );
      },
      {
        message:
          "La contraseña debe tener entre 8 y 16 carácteres y contener al menos una letra mayúscula, una letra minúscula y un número",
      }
    ),
    confirmPassword: z.string({ message: "Contraseña inválida" }).min(1, {
      message: "Debes confirmar tu contraseña",
    }),
    height: z
      .string()
      .refine(selectRequiredNumber, {
        message: "La altura debe estar entre 0.1 y 3",
      })
      .transform((value) => Number(value))
      .pipe(
        z
          .number()
          .min(0.1, { message: "La altura debe estar entre 0.1 y 3" })
          .max(3, { message: "La altura debe estar entre 0.1 y 3" })
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type SignUpData = z.infer<typeof SignUpSchema>;
