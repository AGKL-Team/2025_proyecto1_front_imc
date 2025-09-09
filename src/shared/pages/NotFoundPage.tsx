export default function NotFoundPage() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1">404</h1>
      <h2>Página no encontrada</h2>
      <img src="https://img.icons8.com/?size=100&id=pOF8SIG66Ztb&format=png&color=000000" />
      <p>Lo sentimos, la página que buscas no existe.</p>

      <a href="/redirect" className="btn btn-primary mt-3">
        Volver
      </a>
    </div>
  );
}
