import React from "react";
import { useCalculateImc } from "../hooks/useCalculateImc";

export default function ImcForm() {
  const {
    heightInput,
    weightInput,
    response,
    calculate,
    handleInputHeight,
    handleInputWeight,
  } = useCalculateImc();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    calculate();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Altura (m)</label>
          <input
            className="form-control"
            type="number"
            value={parseFloat(heightInput)}
            onChange={(e) => handleInputHeight(e.target.value)}
            step="0.01"
            min="0.1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Peso (kg)</label>
          <input
            className="form-control"
            type="number"
            value={parseFloat(weightInput)}
            onChange={(e) => handleInputWeight(e.target.value)}
            min="1"
            step={"0.1"}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Calcular
        </button>
      </form>

      {response && (
        <div className="result">
          <p>IMC: {response.imc.toFixed(2)}</p>
          <p>Categoría: {response.categoria}</p>
        </div>
      )}
    </div>
  );
}
