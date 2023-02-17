import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Formulario from "./Formulario";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import Formato_arquiler from "./Formato_arquiler";



ReactDOM.render(
  <BrowserRouter>
    <div className="contenedor">
     
      <Formato_arquiler/>
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);
