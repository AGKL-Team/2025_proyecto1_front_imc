import { useQuery } from "@tanstack/react-query";
import { IMC_HISTORY } from "../constants";
import { getImcHistory } from "../services/imc.service";

export const useImcHistory = () => {
  const { data, isLoading } = useQuery({
    queryKey: [IMC_HISTORY],
    queryFn: getImcHistory,
    enabled: true,
  });

  return { records: data, isLoading };
};
