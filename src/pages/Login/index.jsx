import { useParams, useSearchParams } from "react-router-dom";

function Login() {
  const [searchParams] = useSearchParams();
  const { token } = useParams();

  return (
    <div>
      <h1>Login Page</h1>
      <p>Token: {token}</p>
    </div>
  );
}

export default Login;
