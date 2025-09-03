import { useState } from "react";
import { ImcResponse } from "../interfaces/imc-response.interface";
import { calculateImc } from "../services/imc.service";

export const useCalculateImc = () => {
  // User Interface Variables
  const [heightInput, setHeightInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [error, setError] = useState("");

  // Bussiness Logic Variables
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [response, setResponse] = useState<ImcResponse | null>(null);

  const handleInputHeight = (value: string) => {
    const floatHeight = parseFloat(value);

    if (isNaN(floatHeight) || floatHeight < 0) {
      setError("Ingrese una altura válida entre 0 y 3 metros.");
      setResponse(null);
      setHeight(0);
      setHeightInput("");
      return;
    }
    setHeight(floatHeight);
    setHeightInput(floatHeight ? value : "");
    setError("");
  };

  const handleInputWeight = (value: string) => {
    const floatWeight = parseFloat(value);
    if (isNaN(floatWeight) || floatWeight < 0) {
      setError("Ingrese un peso válido entre 0 y 500 kg.");
      setResponse(null);
      setWeight(0);
      setWeightInput("");
      return;
    }
    setWeight(floatWeight || 0);
    setWeightInput(floatWeight ? value : "");
    setError("");
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
    heightInput,
    weightInput,
    response,
    error,
    calculate,
    handleInputHeight,
    handleInputWeight,
  };
};
