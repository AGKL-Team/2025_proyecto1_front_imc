import LoadingIndicator from "../../../shared/components/LoaderIndicator";
import { useImcHistory } from "../hooks/useImcHistory";

export default function ImcHistoryList() {
  const { isLoading, records } = useImcHistory();

  return (
    <div id="imc-history-list" className="mt-4">
      {isLoading && <LoadingIndicator isLoading={isLoading} />}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Peso (kg)</th>
            <th scope="col">Altura (m)</th>
            <th scope="col">IMC</th>
            <th scope="col">Categoría</th>
          </tr>
        </thead>
        <tbody>
          {records?.map((record) => (
            <tr key={record.id}>
              <td>
                {new Date(record.date).toLocaleString("es-AR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })}
              </td>
              <td>{record.weight}</td>
              <td>{record.height}</td>
              <td>{record.imc}</td>
              <td>{record.category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
