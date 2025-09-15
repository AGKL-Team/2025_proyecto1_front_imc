import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEvolutionChart } from "../hooks/useEvolutionChart";
import { ImcResponse } from "../interfaces/imc-response.interface";
import { ImcFiltersSchema } from "../schemas/imc-history-filters.schema";
import ImcFilters from "./ImcHistoryFilters";

interface EvolutionChartProps {
  filters: ImcFiltersSchema;
  setFilters: (filters: ImcFiltersSchema) => void;
}

const records: ImcResponse[] = [
  {
    id: 1,
    date: "2025-01-01",
    weight: 70,
    height: 1.75,
    imc: 22.86,
    category: {
      id: 1,
      name: "Normal",
      min: 0,
      max: 24.9,
    },
    userId: "some-user-id",
  },
  {
    id: 2,
    date: "2025-02-01",
    weight: 72,
    height: 1.75,
    imc: 23.51,
    category: {
      id: 1,
      name: "Normal",
      min: 0,
      max: 24.9,
    },
    userId: "some-user-id",
  },
  {
    id: 3,
    date: "2025-03-01",
    weight: 74,
    height: 1.75,
    imc: 24.16,
    category: {
      id: 1,
      name: "Normal",
      min: 0,
      max: 24.9,
    },
    userId: "some-user-id",
  },
  {
    id: 4,
    date: "2025-04-01",
    weight: 76,
    height: 1.75,
    imc: 24.81,
    category: {
      id: 1,
      name: "Normal",
      min: 0,
      max: 24.9,
    },
    userId: "some-user-id",
  },
  {
    id: 5,
    date: "2025-05-01",
    weight: 78,
    height: 1.75,
    imc: 25.47,
    category: {
      id: 2,
      name: "Sobrepeso",
      min: 25,
      max: 29.9,
    },
    userId: "some-user-id",
  },
  {
    id: 6,
    date: "2025-06-01",
    weight: 80,
    height: 1.75,
    imc: 26.12,
    category: {
      id: 2,
      name: "Sobrepeso",
      min: 25,
      max: 29.9,
    },
    userId: "some-user-id",
  },
  {
    id: 7,
    date: "2025-07-01",
    weight: 79,
    height: 1.75,
    imc: 25.79,
    category: {
      id: 2,
      name: "Sobrepeso",
      min: 25,
      max: 29.9,
    },
    userId: "some-user-id",
  },
  {
    id: 8,
    date: "2025-08-01",
    weight: 77,
    height: 1.75,
    imc: 25.14,
    category: {
      id: 2,
      name: "Sobrepeso",
      min: 25,
      max: 29.9,
    },
    userId: "some-user-id",
  },
  {
    id: 9,
    date: "2025-09-01",
    weight: 75,
    height: 1.75,
    imc: 24.49,
    category: {
      id: 1,
      name: "Normal",
      min: 0,
      max: 24.9,
    },
    userId: "some-user-id",
  },
  {
    id: 10,
    date: "2025-10-01",
    weight: 73,
    height: 1.75,
    imc: 23.84,
    category: {
      id: 1,
      name: "Normal",
      min: 0,
      max: 24.9,
    },
    userId: "some-user-id",
  },
];

export default function EvolutionChart({
  filters,
  setFilters,
}: EvolutionChartProps) {
  // const { records, isLoading } = useImcHistory(filters);
  const { average, variation, count } = useEvolutionChart(records);

  return (
    <>
      {/* {isLoading && <LoadingIndicator isLoading />} */}
      <ImcFilters filters={filters} setFilters={setFilters} />
      <div className="d-flex flex-row align-items-center justify-content-evenly">
        <LineChart
          height={350}
          width={600}
          data={records}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <Line
            dataKey={"weight"}
            name="Peso (Kg)"
            type={"monotone"}
            strokeWidth={2}
            stroke="blue"
          />
          <XAxis dataKey={"date"} />
          <YAxis />
          <Legend align="center" />
          <Tooltip />
        </LineChart>
        <div>
          <h4>Estadísticas</h4>
          <div className="alert alert-info">
            <span>
              <strong>Promedio:</strong> {average}
            </span>
            <br />
            <span>
              <strong>Variación:</strong> {variation}
            </span>
            <br />
            <span>
              <strong>Total de registros:</strong> {count}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
