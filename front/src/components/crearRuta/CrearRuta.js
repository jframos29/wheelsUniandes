import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './crearRuta.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'
import MapContainer from '../Map/MapContainer'

function CrearRuta(props) {

  const [placas, setPlacas] = useState('');
  const [color, setColor] = useState('');
  const [cupos, setCupos] = useState(0);
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [hora, setHora] = useState('');
  const [latOrigen, setLatOrigen] = useState(0);
  const [lonOrigen, setLonOrigen] = useState(0);
  const [latDestino, setLatDestino] = useState(0);
  const [lonDestino, setLonDestino] = useState(0);
  const [confirmacion, setConfirmacion] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(origen, destino, hora);
    confirmarServicio();
  }

  const backUrl = "http://localhost:3001";

  const style = {
    width: '100%',
    height: '100%'
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

      console.log(tempO, tempD);
      setLatOrigen(tempO.lat);
      setLonOrigen(tempO.lng);

      setLatDestino(tempO.lat);
      setLonDestino(tempO.lng);
      console.log("origen", latOrigen, lonOrigen);
      console.log("destino", latDestino, lonDestino);



      //usa la respuesta
    })();
  }


  const unirse = () => {
    (async () => {
      const user = props.cookies.get('wheelsUser');

      const req = await fetch(`${backUrl}/loQueQuieroHacer`, {
        method: 'POST',
        body: {},
        headers: {
          'Authorization': `Bearer ${props.cookies.get('wheelsToken')}`,
          'user': JSON.stringify(user),
          'Content-Type': 'application/json'
        }
      });
      const rta = await req.json();
      //usa la respuesta
    })();
  }
  return (
    props.cookies.cookies.wheelsToken ?
      <div className="App">
        <div className="container heading">
          <h1>Crea una nueva ruta, {props.allCookies.wheelsUser.uid} </h1>
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
            <div className="col-sm-8 col-md-8 col-lg-6">
              <form className="form heading" onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="origen">Origen de tu ruta</label>
                  <input required type="text" className="form-control" id="origen" onChange={e => setOrigen(e.target.value)} placeholder="Ingresa desde dónde sales" />
                </div>
                <div className="form-group">
                  <label htmlFor="destino">Destino de tu ruta</label>
                  <input required type="text" className="form-control" id="destino" onChange={e => setDestino(e.target.value)} placeholder="Ingresa cuál es tu destino" />
                </div>
                <div className="form-group">
                  <label htmlFor="hora">Hora de salida</label>
                  <input required type="text" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" className="form-control" id="hora" onChange={e => setHora(e.target.value)} placeholder="Ingresa a qué hora sales Ej. 14:00" />
                </div>
                <div className="form-group">
                  <label htmlFor="carro">Elige el carro de esta ruta</label>
                  <select required className="form-control" id="carro" placeholder="Elige el carro">
                    <option>Elige uno de tus carros</option>
                    {props.carros && props.carros.length > 0 ?
                      props.carros
                        .map((element) => {
                          return <option value={element.placas}>
                            {element.marca} {element.linea} de placas {element.placas}
                          </option>
                        })
                      :
                      <div></div>
                      // <option disabled>Agrega algún carro</option>
                    }
                  </select>
                </div>
                <button type="submit" className="btn yellow-black">Crear ruta</button>
              </form>
              {/* {confirmacion ?
                <div>
                  Origen
                  <MapContainer
                  lat={latOrigen}
                  lng={lonOrigen}
                  ></MapContainer>
                  Destino
                  <MapContainer
                  lat={latDestino}
                  lng={lonDestino}
                  ></MapContainer>
                  
                </div>
                :
                <div></div>} */}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
          </div>        </div>
      </div>
      :
      <div className="App heading"><h2>Redirígete a <a href="/"> la página principal</a>. <br /> Debes iniciar sesión para usar el contenido de Wheels Uniandes</h2></div>
  );
}

export default CrearRuta;

