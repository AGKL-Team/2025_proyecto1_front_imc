import { useState } from "react";
import { ImcResponse } from "../interfaces/imc-response.interface";
import { calculateImc } from "../services/imc.service";

export const useCalculateImc = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [response, setResponse] = useState<ImcResponse | null>(null);
  const [error, setError] = useState("");

  const handleInputHeight = (value: string) => {
    setHeight(parseFloat(value) || 0);
  };

  const handleInputWeight = (value: string) => {
    setWeight(parseFloat(value) || 0);
  };

  const calculate = async () => {
    if (!validateHeight()) {
      setError("Altura inválida. Debe estar entre 0 y 3 metros.");
      setResponse(null);
      return;
    }

    if (!validateWeight()) {
      setError("Peso inválido. Debe estar entre 0 y 500 kg.");
      setResponse(null);
      return;
    }

    try {
      const imcResponse = await calculateImc({ height, weight });

      setResponse(imcResponse);
      setError("");
    } catch (err) {
      setError(
        "Error al calcular el IMC. Verifica si el backend está corriendo."
      );
      setResponse(null);
    }
  };

  const validateHeight = () => {
    return height > 0 && height < 3;
  };
  const validateWeight = () => {
    return weight > 0 && weight < 500;
  };

  return {
    height,
    weight,
    response,
    error,
    calculate,
    handleInputHeight,
    handleInputWeight,
  };
};
