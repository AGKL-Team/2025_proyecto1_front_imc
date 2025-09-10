import { ImcPage } from "../../features/imc/pages/ImcPage";
import ImcLayout from "../../shared/layouts/ImcLayout";
import HomePage from "../../shared/pages/HomePage";

const ImcRoutes = [
  {
    path: "/imc",
    element: <ImcLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "calcular",
        element: <ImcPage />,
      },
    ],
  },
];

export default ImcRoutes;
