import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './crearRuta.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'
import MapContainer from '../Map/MapContainer'
import { useHistory } from "react-router-dom";
import Flatpickr from "react-flatpickr";

function CrearRuta(props) {


  var today = new Date();
  var anho = today.getFullYear();
  var mes = `${today.getMonth() + 1}`.padStart(2, 0);
  var dia = `${today.getDate()}`.padStart(2, 0);
  var horaT = `${today.getHours()}`.padStart(2, 0);
  var minutos = `${today.getMinutes()}`.padStart(2, 0);

  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [hora, setHora] = useState('');
  const [latOrigen, setLatOrigen] = useState(0);
  const [lonOrigen, setLonOrigen] = useState(0);
  const [latDestino, setLatDestino] = useState(0);
  const [lonDestino, setLonDestino] = useState(0);
  const [confirmacion, setConfirmacion] = useState(false);
  const [confirmacion1, setConfirmacion1] = useState(false);
  const [confirmacion2, setConfirmacion2] = useState(false);
  const [fecha, setFecha] = useState('');
  const [seleccionado, setSeleccionado] = useState(false);
  const [cupos, setCupos] = useState(0);
  const [cupoExtra, setCupoExtra] = useState(0);


  let history = useHistory();
  const dotenv = require("dotenv");
  dotenv.config();

  function handleSubmit(e) {
    e.preventDefault();
    setSeleccionado(true);
  }


  function repetirProceso() {
    alert("Vuelve a ingresar los datos para obtener mayor precisión");
  }
  const backUrl = "http://localhost:5000";

  const style = {
    width: '100%',
    height: '100%'
  }


  function enviarRuta1() {
    setConfirmacion1(true);
    console.log(confirmacion1);
    console.log(confirmacion2);
    if (confirmacion1 && confirmacion2) {
      crearServicio();
    }
    else {
      alert("Por favor confirme el otro punto");
    }
  }

  function enviarRuta2() {
    setConfirmacion2(true);
    console.log(confirmacion1);
    console.log(confirmacion2);
    if (confirmacion1 && confirmacion2) {
      crearServicio();
    }
    else {
      alert("Por favor confirme el otro punto");
    }
  }

  const crearServicio = () => {
    (async () => {
      const user = props.cookies.get('wheelsUser');
      const fechaTotal = fecha + "T" + hora + ":00";
      const fechita = new Date(fechaTotal);
      const timestamp = Math.floor(fechita.getTime() / 1000);
      const bodyService = JSON.stringify({
        "dueño": user.uid,
        "cuposRestantes": cupos,
        "usuarios": [],
        "ruta": [],
        "duracionAprox":"",
        "instrucciones":[],
        "distancia":"",
        "waypoints":[],
        "initial": {
          "lat": latOrigen,
          "lng": lonOrigen
        },
        "destination": {
          "lat": latDestino,
          "lng": lonDestino
        },
        "comenzado": false,
        "terminado": false,
        "departureTime": timestamp
      });
      const req = await fetch(`${backUrl}/services/crearServicio`, {
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
      if (rta.msg === 'OK') {
        alert("Servicio creado satisfactoriamente!");
        history.push('ppalLog');
      }
    })();
  }




  const nueva = () => {
    setConfirmacion(false);
    console.log(origen, destino, hora);
    confirmarServicio();
  }


  const confirmarServicio = () => {
    (async () => {
      const user = props.cookies.get('wheelsUser');
      const body = JSON.stringify({
        "direccionInicio": origen,
        "direccionFin": destino
      });
      const req = await fetch(`${backUrl}/services/confirmarMapa`, {
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

      setLatDestino(tempD.lat);
      setLonDestino(tempD.lng);
      console.log("origen", latOrigen, lonOrigen);
      console.log("destino", latDestino, lonDestino);

      setConfirmacion(true);

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
                  <label htmlFor="fecha">Fecha de salida</label>
                  <input type="date" className="from-control" id="fecha" name="trip-start" min={anho + "-" + mes + "-" + dia} max="2025-12-31" onChange={e => setFecha(e.target.value)}></input>
                  <label htmlFor="hora">Hora de salida</label>
                  <input type="time" id="hora" name="appt" onChange={e => setHora(e.target.value)} required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="carro">Elige el carro de esta ruta</label>
                  <select required className="form-control" id="carro" placeholder="Elige el carro" onChange={e => setCupoExtra(e.target.value)}>
                    <option>Elige uno de tus carros</option>
                    {props.carros && props.carros.length > 0 ?
                      props.carros
                        .map((element) => {
                          return <option value={element.cupos}>
                            {element.marca} {element.linea} de placas {element.placas} (Cupo maximo {element.cupos})
                          </option>
                        })
                      :
                      <div></div>
                      // <option disabled>Agrega algún carro</option>
                    }
                  </select>
                </div>
                {/* <input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.." data-id="datetime" readonly="readonly"/> */}
                <button onClick={nueva} className="btn yellow-black">Continuar Proceso</button>
                {seleccionado ? <div><input required type="number" min="1" max={"" + cupoExtra} className="form-control" id="cupos" onChange={e => setCupos(e.target.value)} placeholder="Ingresa cantidad de cupos disponibles" /> <button type="submit" className="btn yellow-black">Crear ruta</button></div> : <div></div>}
              </form>
              {confirmacion ?
                <div className="row maps heading">
                  <div className="col-6 origen">
                    ¿Es correcto el <i>origen</i>?
                    <br />
                    <button onClick={enviarRuta1} className="btn yellow">Sí</button>
                    <button onClick={repetirProceso} className="btn yellow">No</button>

                    <MapContainer
                      lat={latOrigen}
                      lng={lonOrigen}
                    ></MapContainer>

                  </div>

                  <div className="col-6 destino">
                    ¿Es correcto el <i>destino</i>?
                    <br />
                    <button onClick={enviarRuta2} className="btn yellow">Sí</button>
                    <button onClick={repetirProceso} className="btn yellow">No</button>
                    <MapContainer
                      lat={latDestino}
                      lng={lonDestino}
                    ></MapContainer>
                  </div>

                </div>
                :
                <div></div>}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
          </div>        </div>
      </div>
      :
      <div className="App heading"><h2>Redirígete a <a href="/"> la página principal</a>. <br /> Debes iniciar sesión para usar el contenido de Wheels Uniandes</h2></div>
  );
}

export default CrearRuta;

