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
  const [lista, setLista] = useState([]);


  const backUrl = "http://localhost";

  let history = useHistory();
  function crearRuta() {
    history.push("/crearRuta");
  }

  function handleSubmit(e) {

    e.preventDefault();
    console.log(origen, destino)
    confirmarServicio();
  }


  const confirmarServicio = () => {
    (async () => {
      const user = props.cookies.get('wheelsUser');
      const body = JSON.stringify({
        "direccionInicio": origen,
        "direccionFin": destino
      });
      const req = await fetch(`${backUrl}/services/confirmarServicio`, {
        method: 'POST',
        body: body,
        headers: {
          'Authorization': `Bearer ${props.cookies.get('wheelsToken')}`,
          'user': JSON.stringify(user),
          'Content-Type': 'application/json'
        }
      });
      const rta = await req.json();
      console.log(rta);


      const tempO = rta.resultadoInicio.results[0].geometry.location;
      const tempD = rta.resultadoFin.results[0].geometry.location;
      consultarServicios(tempO.lat, tempO.lng, tempD.lat, tempD.lng);
    })();

  }

  const consultarServicios = (latOrigen, lonOrigen, latDestino, lonDestino) => {
    (async () => {
      console.log("origen", latOrigen, lonOrigen);
      console.log("destino", latDestino, lonDestino);
      const user = props.cookies.get('wheelsUser');
      const bodyService = JSON.stringify({
        "fin": {
          "lat":latDestino,
          "lng":lonDestino
        },
        "inicio": {
          "lat":latOrigen,
          "lng":lonOrigen
        }
      });
      const req = await fetch(`${backUrl}/services/buscarServicio`, {
        method: 'POST',
        body: bodyService,
        headers: {
          'Authorization': `Bearer ${props.cookies.get('wheelsToken')}`,
          'user': JSON.stringify(user),
          'Content-Type': 'application/json'
        }
      });
      const rta = await req.json();
      console.log(rta);
      setLista(rta);
      // history.push('/rutasDisponibles');

    })();
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
                pregDestino && lista.length===0 ?
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="origen">¿De dónde sales?</label>
                        <input required type="text" className="form-control" id="origen" onChange={e => setOrigen(e.target.value)} placeholder="Ingresa el origen" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="destino">¿A dónde te diriges?</label>
                        <input required type="text" className="form-control" id="destino" onChange={e => setDestino(e.target.value)} placeholder="Ingresa tu destino" />
                      </div>
                      <button type="submit" className="btn yellow-black">Buscar</button>
                    </form>
                    :
                    pregDestino && lista.length>=0 ?
                <div>
                <h2>Rutas disponibles</h2>
                {lista
                .map((element) => {
                          return <div style={{marginBottom: 1.5 + 'rem'}}>
                            <button className="btn yellow">Reservar</button>servicio el {element.departureTime} por {element.usuarios[0]}
                          </div>
                        })
                      // <option disabled>Agrega algún carro</option>
                    }
                </div>
                :
                <div>
                  <button onClick={preguntarDestino} className="btn yellow-black">Unirse a ruta de Wheels</button>
                  <img className="wheels" src={unirse} ></img>
                </div>

              }


            </div>
          </div>
        </div>
      </div>
      :
      <div className="App heading"><h2>Redirígete a <a href="/"> la página principal</a>. <br/> Debes iniciar sesión para usar el contenido de Wheels Uniandes</h2></div>
  );
}

export default PpalLog;