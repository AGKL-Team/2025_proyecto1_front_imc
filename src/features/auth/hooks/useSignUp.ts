import { useMutation } from "@tanstack/react-query";
import { signUp } from "../AuthService";
import { SIGN_UP } from "../constants";
import { SignUpRequest } from "../interfaces/requests/sign-up-request.interface";

import { useNavigate } from "react-router-dom";
import { useLogIn } from "./useLogIn";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { isPending: isSigningIn } = useLogIn();
  const { mutateAsync, isPending: isSigningUp } = useMutation({
    mutationKey: [SIGN_UP],
    mutationFn: (request: SignUpRequest) => signUp(request),
    onSuccess: async () => {
      navigate("/auth/confirm-email");
    },
  });

  return {
    signUp: mutateAsync,
    isSigningIn,
    isSigningUp,
  };
};
