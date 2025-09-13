import ImcHistoryFilters from "../components/ImcHistoryFilters";
import ImcHistoryList from "../components/ImcHistoryList";

export default function ImcHistoryPage() {
  return (
    <>
      <div className="container py-5">
        <h2>IMC History</h2>
        <ImcHistoryFilters />
        <ImcHistoryList />
      </div>
    </>
  );
}
