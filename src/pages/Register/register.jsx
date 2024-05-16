import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./register.scss";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email && !password) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== confPassword) {
      setError("As senhas não coincidem");
      return;
    }

    const response = signup(email, password);

    if (response) {
      setError(response);
      return;
    }

    navigate("/");
  };

  return (
    <form className="register" onSubmit={handleRegister}>
      <div className="content">
        <h1 className="title">Cadastre-se</h1>

        <div className="inputs">
          <input
            type="text"
            className="email_input"
            placeholder="Insira seu e-mail"
            F
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
          <input
            type="password"
            className="password"
            placeholder="Confirme sua senha"
            value={confPassword}
            onChange={(e) => [setConfPassword(e.target.value), setError("")]}
          />
        </div>

        <span className="error_span">{error}</span>

        <div className="google-btn">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              setEmail(decoded.email);
              setPassword(decoded.sub);
              setConfPassword(decoded.sub);
            }}
            onError={() => {
               setError("Login failed");
            }}
          />
        </div>

        <button className="login_btn">
          <span>Avançar</span>
        </button>

        <span>
          Já possui uma conta?
          <span className="login_link" onClick={() => navigate("/login")}>
            &nbsp;Faça o login
          </span>
        </span>
      </div>
    </form>
  );
}
