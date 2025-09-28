import z from "zod";
import { selectRequiredNumber } from "../../../shared/utils/required-number";

export const CalculateImcSchema = z.object({
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
  weight: z
    .string()
    .refine(selectRequiredNumber, {
      message: "El peso debe estar entre 1 y 500",
    })
    .transform((value) => Number(value))
    .pipe(
      z
        .number()
        .min(1, { message: "El peso debe estar entre 1 y 500" })
        .max(500, { message: "El peso debe estar entre 1 y 500" })
    ),
});

export type CalculateImcSchema = z.infer<typeof CalculateImcSchema>;
