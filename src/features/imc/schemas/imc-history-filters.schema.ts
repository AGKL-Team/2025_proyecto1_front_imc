import z from "zod";

export const ImcFiltersSchema = z
  .object({
    dateFrom: z.string().optional(),
    dateTo: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.dateFrom && data.dateTo) {
        return data.dateFrom <= data.dateTo;
      }
      return true;
    },
    {
      message: "La fecha 'Desde' debe ser anterior o igual a la fecha 'Hasta'",
    }
  );

export type ImcFiltersSchema = z.infer<typeof ImcFiltersSchema>;
