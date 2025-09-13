import { useState } from "react";
import { ImcHistoryFiltersSchema } from "./../schemas/imc-history-filters.schema";

export const useImcHistoryFilters = () => {
  const [filters, setFilters] = useState<ImcHistoryFiltersSchema>({
    dateFrom: undefined,
    dateTo: undefined,
  });

  return { filters, setFilters };
};
