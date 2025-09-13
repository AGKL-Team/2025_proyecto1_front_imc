export default function ImcHistoryFilters() {
  return (
    <div id="filters" className="container card p-3 mb-4">
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="dateFrom" className="form-label">
            Fecha Desde:
          </label>
          <input type="date" id="dateFrom" className="form-control" />
        </div>
        <div className="col-md-4">
          <label htmlFor="dateTo" className="form-label">
            Fecha Hasta:
          </label>
          <input type="date" id="dateTo" className="form-control" />
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-primary w-100">Filtrar</button>
        </div>
      </div>
    </div>
  );
}
