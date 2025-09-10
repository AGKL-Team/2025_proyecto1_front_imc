import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
export function AuthLayout() {
  return (
    <div className="d-flex flex-column vh-100 fadeInUp">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Calculadora IMC
            </Link>
          </div>
        </nav>
      </header>
      <main className="d-flex justify-content-evenly flex-grow-1">
        <section
          style={{ backgroundColor: "#E6E6FA" }}
          className="d-none d-lg-flex flex-grow-1 align-items-center justify-content-center"
        >
          <Logo />
        </section>
        <section className="d-flex flex-grow-1 align-items-center justify-content-center">
          <Outlet />
        </section>
      </main>
      <footer className="bg-light text-center p-3 border-top mt-auto">
        &copy; 2025 Calculadora IMC
      </footer>
    </div>
  );
}
