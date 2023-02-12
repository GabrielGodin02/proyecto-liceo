import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Formulario from './Formulario';
import {useHistory} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <div className="contenedor">
            <Formulario />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
    
);
function home(){
    const history = useHistory();
    const handleClick =() => history.push('/formulario');
}


