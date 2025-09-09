import { AuthLayout } from "../../shared/layouts/AuthLayout";
import SignInPage from "../../shared/pages/auth/log_in_page";
import SignUpPage from "../../shared/pages/auth/sign_up_page";

const AuthRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
    ],
  },
];

export default AuthRoutes;
