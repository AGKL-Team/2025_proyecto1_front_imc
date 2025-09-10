import { useMutation } from "@tanstack/react-query";
import { CALCULATE_IMC } from "../constants";
import { ImcResponse } from "../interfaces/imc-response.interface";
import { calculateImc } from "../services/imc.service";
import { useState } from "react";

export const useCalculateImc = () => {
  const [imcResponse, setImcResponse] = useState<ImcResponse | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: calculateImc,
    mutationKey: [CALCULATE_IMC],
    onSuccess: (data) => {
      setImcResponse(data);
    },
  });

  return { calculateImc: mutate, isPending, imcResponse };
};
