import { Routes, Route } from "react-router-dom";
import Formulario from "./Formulario";
import Formato_arquiler from "./Formato_arquiler";


const Login = () => {
  return (
    <>
      <form className="Login">
        <div className="form-item">
          <input
            required
            className="input-text"
            type="email"
            id="email"
            name="correo"
          ></input>
          <label>Correo Eletronico </label>
        </div>

        <div className="form-item">
          <input
            className="input-text"
            required
            type="password"
            id="contraseña"
            name="contraseña"
          ></input>
          <label>Contraseña</label>
        </div>
        <a href="/Formulario">No estas Registardo?</a>
      </form>
      <Routes>
       
        <Route path='/Formato_arquiler' element={<Formato_arquiler/>} />
		    <Route path='/Formulario' element={<Formulario/>} />
      </Routes>
      
    </>
  );
};
export default Login;
