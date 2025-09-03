import React from "react";
import { useCalculateImc } from "../hooks/useCalculateImc";

export default function ImcForm() {
  const {
    heightInput,
    weightInput,
    error,
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
        <div className="inputField">
          <label>Altura (m)</label>
          <input
            type="number"
            value={parseFloat(heightInput)}
            onChange={(e) => handleInputHeight(e.target.value)}
            step="0.01"
            min="0.1"
          />
        </div>
        <div className="inputField">
          <label>Peso (kg)</label>
          <input
            type="number"
            value={parseFloat(weightInput)}
            onChange={(e) => handleInputWeight(e.target.value)}
            min="1"
            step={"0.1"}
          />
        </div>
        <button className="button" type="submit">
          Calcular
        </button>
      </form>

      {response && (
        <div className="result">
          <p>IMC: {response.imc.toFixed(2)}</p>
          <p>Categoría: {response.categoria}</p>
        </div>
      )}

      {error && (
        <div className="container-invalid">
          <p className="invalid">{error}</p>
        </div>
      )}
    </div>
  );
}
