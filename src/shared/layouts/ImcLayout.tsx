import { Link, Outlet } from "react-router-dom";

export default function ImcLayout() {
  return (
    <div className="d-flex flex-column vh-100 theme-responsive">
      <header>
        <nav className="navbar navbar-expand-lg border-bottom theme-navbar">
          <div className="container-fluid">
            <Link to="/imc" className="navbar-brand">
              Calculadora IMC
            </Link>
            {/* Botón toggler para menú hamburguesa */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/imc/calculate" className="nav-link">
                    Calcular IMC
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/imc/history" className="nav-link">
                    Historial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/imc/evolution" className="nav-link">
                    Evolución
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="d-flex justify-content-evenly flex-grow-1 flex-column theme-main">
        <Outlet />
      </main>
      <footer className="text-center p-3 border-top mt-auto theme-footer">
        &copy; 2025 AGKL Team
      </footer>
    </div>
  );
}
