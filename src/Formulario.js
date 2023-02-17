


const Formulario = () => {
  return (
    <>
      <form className="formulario">
        <div className="lado">
        <div className="form-item">
          <input
            required
            className="input-text"
            type="number"
            id="cedula"
            name="nombre"
          ></input>
          <label>Identificacion </label>
          
        </div>
        <div className="form-item">
            <input 
            required
            className="input-text"
            type="email" 
            id="correo" 
            name="cuenta"
            ></input>
            <label>Correo Eletronico</label>
          </div>
        </div>
        <div className="lado">
        <div className="form-item">
          <input
            required
            className="input-text"
            type="text"
            id="nombre"
            name="nombre"
          ></input>
          <label>Nombres </label>
        </div>
        <div className="form-item">
          <input
           type="password"
           className="input-text"
           id="contrseñas"
           name="password"
           required
          ></input>
          <label>Contraseña</label>
        </div>
        </div>
        
        <div className="form-item">
          <input
            required
            className="input-text"
            type="text"
            id="Apellidos"
            name="apellido"
          ></input>
          <label>Apellidos </label>
        </div>
        <div className="form-item">
          <input
            required
            className="input-text"
            type="number"
            id="telefono"
            name="telefono"
          ></input>
          <label>Telefono </label>
        </div>
        <div>
          <h4>Genero</h4>
          <input type="radio" value="Masculino" name="genero"></input>
          <label>Masculino</label>
          <input type="radio" value="Femenino" name="genero"></input>
          <label>Femenino</label>
        </div>
        <div>
          <select className="estado_sivil">
            <option>Estado Sivil</option>
            <option>Soltero</option>
            <option>Casado</option>
            <option>Viudo</option>
          </select>
        </div>
        <button type="SUBMIT">Enviar</button>
      </form>
      <a href="/Formato_arquiler">Login</a>
    </>
  );
};
export default Formulario;
