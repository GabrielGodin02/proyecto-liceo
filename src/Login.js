import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

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
				<a href="#">No estas Registrado</a>
			</form>
		</>
  );
};
export default Login;
