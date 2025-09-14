import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { CALCULATE_IMC } from "../constants";
import { CalculateImcResponse } from "../interfaces/calculate-imc-response.interface";
import { calculateImc } from "../services/imc.service";

export const useCalculateImc = () => {
  const [imcResponse, setImcResponse] = useState<CalculateImcResponse | null>(
    null
  );

  const { mutate, isPending } = useMutation({
    mutationFn: calculateImc,
    mutationKey: [CALCULATE_IMC],
    onSuccess: (data) => {
      setImcResponse(data);
    },
  });

  return { calculateImc: mutate, isPending, imcResponse };
};
