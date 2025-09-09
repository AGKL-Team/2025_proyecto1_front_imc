import SignUpForm from "../../../features/auth/components/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Registrarse</h2>
      <SignUpForm />
      <div className="text-center p-2">
        <p>
          ¿Ya tenés una cuenta? <a href="/auth/log-in">Iniciá Sesión</a>
        </p>
      </div>
    </div>
  );
}
