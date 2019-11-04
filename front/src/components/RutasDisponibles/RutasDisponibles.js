import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './RutasDisponibles.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'

function RutasDisponibles(props) {

  function handleSubmit(e) {
    e.preventDefault();
    
  }


  return (
    true ?
      <div className="App">
        <div className="container heading">
          <h1>Rutas disponibles para tí, {props.allCookies.wheelsUser.uid} </h1>
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
            <div className="col-sm-8 col-md-8 col-lg-6 heading">
              <p>Ruta #1</p>
              <p>Ruta #2</p>
              <p>Ruta #3</p>
              <p>Ruta #4</p>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
          </div>        </div>
      </div>
      :
      <div></div>
  );
}

export default RutasDisponibles;

