import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Formulario from './Formulario';
import Login from './Login'


ReactDOM.render(
    <React.StrictMode>
        <div className="contenedor">
            <Login/>
            <Formulario />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
    
);







