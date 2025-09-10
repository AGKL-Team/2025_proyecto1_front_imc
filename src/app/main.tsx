import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./global.css";
import AppProvider from "./providers/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<AppProvider />);
