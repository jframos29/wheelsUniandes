import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './PpalLog.css';
import unirse from '../../assets/unirse.png';
import crear from '../../assets/crear.png';
import { useHistory } from "react-router-dom";

function PpalLog(props) {

  const [pregDestino, setPregDestino] = useState(false);
  const [destino, setDestino] = useState('');
  const [origen, setOrigen] = useState('');


  let history = useHistory();
  function crearRuta() {
    history.push("/crearRuta");
  }

  function handleSubmit() {
    console.log(origen, destino)
    history.push("/rutasDisponibles");
  }

  function preguntarDestino() {
    setPregDestino(true);
  }

  return (
    props.cookies.cookies.wheelsToken ?
      <div className="App">
        <div className="container heading">
          <h1>Bienvenido {props.allCookies.wheelsUser.uid} </h1>
          <div className="row heading">
            <div className="col">
              <button onClick={crearRuta} className="btn yellow-black">Crear ruta de Wheels</button>
              <img className="wheels" src={crear} ></img>

            </div>
            <div className="col">
              {
                !pregDestino ?
                <div>
                  <button onClick={preguntarDestino} className="btn yellow-black">Unirse a ruta de Wheels</button>
                  <img className="wheels" src={unirse} ></img>
                </div>
                  :
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="origen">¿De dónde sales?</label>
                        <input type="text" className="form-control" id="origen" onChange={e => setOrigen(e.target.value)} placeholder="Ingresa el origen" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="destino">¿A dónde te diriges?</label>
                        <input type="text" className="form-control" id="destino" onChange={e => setDestino(e.target.value)} placeholder="Ingresa tu destino" />
                      </div>
                      <button type="submit" className="btn yellow-black">Buscar</button>
                    </form>
              }
             

            </div>
          </div>
        </div>
      </div>
      :
      <div>Error</div>
  );
}

export default PpalLog;