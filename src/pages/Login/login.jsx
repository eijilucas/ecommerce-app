import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    if(!email | !password) {
      setError("Preencha todos os campos")
      return;
    }

    const response = signin(email, password);

    if(response) {
      setError(response);
      return;
    }

    navigate("/home")
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <div className="content">
      <h1 className="title">Faça seu login</h1>

        <div className="inputs">
          <input
            type="text"
            className="email_input"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <input
            type="password"
            className="password_input"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
        </div>

        <span className="error_span">{error}</span>

        <div className="google-btn">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
                setEmail(decoded.email);
                setPassword(decoded.sub);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

        <button type="submit" className="login_btn">
          <span>Avançar</span>
        </button>

        <span>
          Não possui uma conta?
          <span className="login_link" onClick={() => navigate("/register")}>
            &nbsp;Cadastre-se
          </span>
        </span>
      </div>
    </form>
  );
}
