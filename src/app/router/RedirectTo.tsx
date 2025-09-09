import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/hooks/useAuthStore";

export default function RedirectTo() {
  const { isAuthenticated } = useAuthStore();
  const pathToGo = isAuthenticated ? "/imc" : "/auth/sign-in";
  return <Navigate to={pathToGo} replace />;
}
