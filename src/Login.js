import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form className="Login">
        <div>
          <label>Correo Eletronico </label>
          <input
            type="email"
            id="email"
            name="correo"
            placeholder="Digite Su Correo Eletronico"
          ></input>
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="digite su contraseña"
          ></input>
        </div>
        <a href="#">No estas Registrado</a>
      </form>
    </>
  );
};
export default Login;
