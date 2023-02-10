import React, { useState, useSyncExternalStore } from "react";

const Formulario = () => {
  return (
    <>
      <form className="formulario">
        <div>
          <label htmlFor="nombre">Identificacion </label>
          <input
            type="number"
            id="cedula"
            name="nombre"
            placeholder="digite su Cedula"
          ></input>
        </div>
        <div>
          <label htmlFor="nombre">Nombres </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="digite su nombres"
          ></input>
        </div>
        <div>
          <label htmlFor="nombre">Apellidos </label>
          <input
            type="text"
            id="Apellidos"
            name="apellido"
            placeholder="digite sus Apellidos"
          ></input>
        </div>
        <div>
          <label htmlFor="telefono">Telefono </label>
          <input
            type="number"
            id="telefono"
            name="telefono"
            placeholder="digite su telefono"
          ></input>
        </div>
        <div>
          <h4>Genero</h4>
          <input type="radio" value="Masculino" name="genero"></input>
          <label>Masculino</label>
          <input type="radio" value="Femenino" name="genero"></input>
          <label>Femenino</label>
        </div>
        <button type="SUBMIT">Enviar</button>
      </form>
    </>
  );
};
export default Formulario;
