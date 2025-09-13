import { useAuthStore } from "../../features/auth/hooks/useAuthStore";

export default function HomePage() {
  const { authResponse } = useAuthStore();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Calculadora IMC</h1>
      <div className="text-center mb-4">Hola, {authResponse?.email}</div>

      <div className="row text-center">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nuevo Registro</h5>
              <img src="https://img.icons8.com/?size=100&id=69QPdUHJ1fb4&format=png&color=000000" />
              <p className="card-text">Calculá tu índice de masa corporal.</p>
              <a href="calculate" className="btn btn-success">
                Calcular
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Historial de Reservas</h5>
              <img src="https://img.icons8.com/?size=100&id=QZmOrGcsX4DO&format=png&color=000000" />
              <p className="card-text">Consultá todos tus registros.</p>
              <a href="history" className="btn btn-outline-primary">
                Ver Historial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
