import EvolutionChart from "../components/EvolutionChart";
import { useImcFilters } from "../hooks/useImcHistoryFilters";

export default function ImcEvolutionPage() {
  const { filters, setFilters } = useImcFilters();

  return (
    <div className="container mt-3 text-center">
      <h1>Evolución</h1>
      <div className="m-1">
        <EvolutionChart filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}
