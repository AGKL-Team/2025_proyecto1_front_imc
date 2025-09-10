import LogInForm from "../../../features/auth/components/log-in-form";

export default function SignInPage() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Iniciar Sesión</h2>
      <LogInForm />
      <div className="text-center p-2">
        <p>
          ¿Todavía no tenés cuenta? <a href="/auth/sign-up">Creá una</a>
        </p>
      </div>
    </div>
  );
}
