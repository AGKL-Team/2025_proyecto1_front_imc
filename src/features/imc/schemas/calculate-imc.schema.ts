import z from "zod";

export const CalculateImcSchema = z.object({
  height: z
    .number({ error: "The height is required" })
    .min(0.1, { message: "The height must be between 0.1 and 3" })
    .max(3, { message: "The height must be between 0.1 and 3" }),
  weight: z
    .number({ error: "The weight is required" })
    .min(1, { message: "The weight must be between 1 and 500" })
    .max(500, { message: "The weight must be between 1 and 500" }),
});

export type CalculateImcSchema = z.infer<typeof CalculateImcSchema>;
