import z from "zod";
import { selectRequiredNumber } from "../../../shared/utils/required-number";

export const AccountSchema = z.object({
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
});

export type AccountSchemaType = z.infer<typeof AccountSchema>;
