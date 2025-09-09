import { useAuthStore } from "../../features/auth/hooks/useAuthStore";

export default function HomePage() {
  const { authResponse } = useAuthStore();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">CarGo</h1>
      <div className="text-center mb-4">Hola, {authResponse?.email}</div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nueva Reserva</h5>
              <img src="https://img.icons8.com/?size=100&id=N1YpxWjnXLGs&format=png&color=000000" />
              <p className="card-text">
                Iniciá una nueva solicitud de vehículo.
              </p>
              <a href="reservas/nueva" className="btn btn-success">
                Reservar
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mis Reservas</h5>
              <img src="https://img.icons8.com/?size=100&id=HMwxzLul2dfm&format=png&color=000000" />
              <p className="card-text">Consultá tus reservas activas.</p>
              <a href="reservas" className="btn btn-primary">
                Ver Reservas
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Historial de Reservas</h5>
              <img src="https://img.icons8.com/?size=100&id=QZmOrGcsX4DO&format=png&color=000000" />
              <p className="card-text">
                Consultá todas las reservas que realizaste.
              </p>
              <a href="historial" className="btn btn-outline-primary">
                Ver Historial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
