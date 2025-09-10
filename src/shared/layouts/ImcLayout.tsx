import { Link, Outlet } from "react-router-dom";

export default function ImcLayout() {
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
      <main className="d-flex justify-content-evenly flex-grow-1 flex-column">
        <Outlet />
      </main>
      <footer className="bg-light text-center p-3 border-top mt-auto">
        &copy; 2025 AGKL Team
      </footer>
    </div>
  );
}
