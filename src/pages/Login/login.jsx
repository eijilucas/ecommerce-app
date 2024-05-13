import { useState } from "react";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    
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

        <span>
          {error}
        </span>

        <button type="submit" className="login_btn">
            <span>Avançar</span>
        </button>
      </div>
    </form>
  );
}
