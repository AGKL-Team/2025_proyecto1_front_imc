import { Link, Outlet } from "react-router-dom";
import "../../app/global.css";

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header style={{ boxShadow: "0 2px 20px 0px black" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Calculadora IMC
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="auth/log-in" className="btn btn-outline-primary">
                    Log In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container-fluid" style={{ padding: 20 }}>
        <Outlet />
      </main>

      <footer
        style={{ boxShadow: "0 2px 10px 0px black" }}
        className="bg-light text-center p-3 border-top mt-auto"
      >
        &copy; 2025 - AGKL Team
      </footer>
    </div>
  );
}
