import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './PpalLog.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'

function PpalLog(props) {
  console.log(props);
  return (
    true ?
      <div className="App">
        <div className="container heading">
          <h1>Bienvenido {props.allCookies.wheelsUser.uid} </h1>
          <div className="row heading">
            <div className="col">
            <button className="btn yellow-black">Crear ruta de Wheels</button>
            <img className="wheels" src={crear} ></img>

            </div>
            <div className="col">
            <button className="btn yellow-black">Unirse a ruta de Wheels</button>
            <img className="wheels" src={unirse} ></img>
            
            </div>
          </div>
        </div>
      </div>
      :
      <div></div>
  );
}

export default PpalLog;