import {Routes, Route, Link, BrowserRouter } from 'react-router-dom'

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
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="digite su contraseña"
          ></input>
        </div>
      </form>
    </>
  );
};
export default Login;
