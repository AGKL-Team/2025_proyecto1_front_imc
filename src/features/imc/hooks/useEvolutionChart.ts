import { ImcResponse } from "../interfaces/imc-response.interface";

export const useEvolutionStatistics = (records: ImcResponse[]) => {
  const count = records.length;
  const average =
    count === 0
      ? 0
      : records.reduce((sum, record) => sum + record.weight, 0) / count;
  const variation =
    count < 2
      ? 0
      : ((records[count - 1].weight - records[0].weight) / records[0].weight) *
        100;

  return {
    average: average.toPrecision(4),
    variation: variation.toPrecision(4),
    count,
  };
};
