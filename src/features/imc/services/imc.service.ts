import axios from "axios";
import { CalculateImcRequest } from "../interfaces/imc-request.interface";
import { ImcResponse } from "../interfaces/imc-response.interface";

const CALCULATE_IMC_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export async function calculateImc(
  request: CalculateImcRequest
): Promise<ImcResponse> {
  const response = await axios.post(`${CALCULATE_IMC_ENDPOINT}/imc/calcular`, {
    altura: request.height,
    peso: request.weight,
  });
  return response.data;
}
