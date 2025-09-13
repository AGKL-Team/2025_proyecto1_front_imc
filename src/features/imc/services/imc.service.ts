import { toast } from "sonner";
import { httpClient } from "../../../shared/http/httpClient";
import { CalculateImcRequest } from "../interfaces/imc-request.interface";
import { ImcResponse } from "../interfaces/imc-response.interface";

const CALCULATE_IMC_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export async function calculateImc(
  request: CalculateImcRequest
): Promise<ImcResponse> {
  const response = await httpClient.post(
    `${CALCULATE_IMC_ENDPOINT}/imc/calcular`,
    {
      height: request.height,
      weight: request.weight,
    }
  );
  return response.data;
}

export async function getImcHistory(): Promise<ImcResponse[]> {
  const response = await httpClient.get<ImcResponse[]>(
    `${CALCULATE_IMC_ENDPOINT}/imc/history`
  );

  if (response.status !== 200) {
    toast.error("Ocurrió un error al obtener el historial de IMC");
  }

  return response.data;
}
