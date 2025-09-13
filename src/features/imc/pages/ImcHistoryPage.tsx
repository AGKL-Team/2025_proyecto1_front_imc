import ImcHistoryFilters from "../components/ImcHistoryFilters";
import ImcHistoryList from "../components/ImcHistoryList";
import { useImcHistoryFilters } from "../hooks/useImcHistoryFilters";

export default function ImcHistoryPage() {
  const { filters, setFilters } = useImcHistoryFilters();

  return (
    <>
      <div className="container py-5">
        <h2>IMC History</h2>
        <ImcHistoryFilters filters={filters} setFilters={setFilters} />
        <ImcHistoryList filters={filters} />
      </div>
    </>
  );
}
