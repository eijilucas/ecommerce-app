import { useState } from "react";
import "./register.scss";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const handleRegister = () => {

    }

  return (
    <form className="register" onSubmit={handleRegister}>
      <div className="content">
        <h1 className="title">Faça seu cadastro</h1>

        <div className="inputs">
          <input
            type="text"
            className="email_input"
            placeholder="Insira seu e-mail"
            F
            value={email}
            onChange={(e) => [setEmail(e.target.value)]}
          />
          <input
            type="password"
            className="password_input"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value)]}
          />
          <input
            type="password"
            className="password"
            placeholder="Confirme sua senha"
            value={confPassword}
            onChange={(e) => [setConfPassword(e.target.value)]}
          />
        </div>

        <button className="login_btn">
          <span>Avançar</span>
        </button>
      </div>
    </form>
  );
}
