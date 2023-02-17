const Formato_arquiler = () => {
  return (
    <>
      <form className="formato">
        <h1>Prestamos de Espacio</h1>
        <div className="fila1">
          <div className="columna">
            <label>Espacio Solicitado</label>
            <select className="fecha">
              <option>Selecione </option>
              <option>Auditorio</option>
            </select>
          </div>

          <div className="columna2">
            <label>fecha de Solicitud</label>
            <input
              type="date"
              required
              className="fecha"
              id="fecha"
              name="fecha_solicitud"
            ></input>
          </div>
          <div className="columna3">
            <label>Fecha De evento</label>
            <input
              type="date"
              required
              className="fecha"
              name="fecha_evento"
            ></input>
          </div>
        </div>
        <div className="fila2">
          <div className="columna4">
            <lavel>Hora Inicio</lavel>
            <input
              type="time"
              required
              className="hora_inicio"
              name="hora_inicio"
            ></input>
          </div>
          <div className="columna5">
            <label>Hora Finalizacion</label>
            <input
              type="time"
              required
              className="hora_final"
              name="hora_final"
            ></input>
          </div>
          <div className="columna6">
            <label>Nombre Del Solicitante</label>
            <input
              type="text"
              required
              className="fecha"
              name="nombre_solicitante"
            ></input>
          </div>
        </div>
        <div className="fila3">
          <div className="columna7">
            <label>Numero De Documento</label>
            <input
              type="number"
              className="documentos"
              name="n_documento"
            ></input>
          </div>
          <div className="columna8">
            <label>Numero De Telefono</label>
            <input
              type="number"
              className="documentos"
              name="n_telefomo"
            ></input>
          </div>
          <div className="columna9">
            <label>Correo Eletronico</label>
            <input type="nemail" className="documentos" name="correo"></input>
          </div>
        </div>
         <input type="submit"
      className="boton"
      ></input>
      </form>
     
    </>
  );
};
export default Formato_arquiler;
