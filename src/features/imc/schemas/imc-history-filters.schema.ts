import z from "zod";

export const ImcHistoryFiltersSchema = z
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
      message: "The 'dateFrom' must be earlier than or equal to 'dateTo'.",
    }
  );

export type ImcHistoryFiltersSchema = z.infer<typeof ImcHistoryFiltersSchema>;
