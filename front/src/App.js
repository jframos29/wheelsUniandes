import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Home'
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PpalLog from "./components/PpalLog/PpalLog";
import CrearRuta from "./components/crearRuta/CrearRuta";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import MisCarros from "./components/MisCarros/MisCarros";
import RutasDisponibles from "./components/RutasDisponibles/RutasDisponibles";
// 0: Home
// 1: InicioSesion
// 2: Register
// 3: PpalLog


function App(props) {
  const [wsConnection, setConnection] = useState(null);
  const [carros, setCarros] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [serviciosPropios, setServiciosPropios] = useState([]);

  const backUrl = "https://wheelsuniandes.herokuapp.com";

  const wsUrl = "wss://wheelsuniandes.herokuapp.com";

  const funcionCookie = (cookie, user) => {
    props.cookies.set('wheelsToken', cookie, { path: '/' });
    props.cookies.set('wheelsUser', { "uid": user });

  }

  const misWheels = (user, token) => {
    (async () => {
      const req = await fetch(`${backUrl}/services/misServicios`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'user': JSON.stringify(user),
          'Content-Type': 'application/json'
        }
      });
      const rta = await req.json();
      setServiciosPropios(rta);
    })();
  };


  const todosWheels = (user, token) => {
    (async () => {
      const req = await fetch(`${backUrl}/services/todosServicios`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'user': JSON.stringify(user),
          'Content-Type': 'application/json'
        }
      });
      const rta = await req.json();
      setServicios(rta);
    })();
  };


  const signout = (e) => {
    e.preventDefault();
    props.cookies.set('wheelsUser', '');
    props.cookies.set('wheelsToken', '');
  }

  const consultarCarros = (user, token) => {
    (async () => {
      const req = await fetch(`${backUrl}/cars/${user.uid}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'user': JSON.stringify(user),
          'Content-Type': 'application/json'
        }
      });
      const rta = await req.json();
      setCarros(rta);
    })();
  };

  const wsConn = () => {
    if (props.cookies.cookies.wheelsUser) {
      const temp = JSON.parse(props.cookies.cookies.wheelsUser);
      const connection = new WebSocket(wsUrl);

      connection.onopen = () => {
        connection.send(temp.uid);
      }

      connection.onmessage = (msg) => {
        console.log(msg);
        if (msg.data.includes("cars#")) {
          const data = msg.data.split("#")[1];
          const jsonData = JSON.parse(data);
          setCarros(jsonData);
        }
        else if (msg.data.includes("services#")) {
          const data = msg.data.split("#")[1];
          const jsonData = JSON.parse(data);
          setServicios(jsonData);
          let results=[];
          for(let ser of jsonData){
            if(ser["dueño"]===JSON.parse(props.cookies.cookies.wheelsUser).uid){
              results.push(ser);
            }
          }
          setServiciosPropios(results);
        }
        else {
          //Nothing to do
        }
      };

      connection.onclose = () => {
      //  console.log("Intento");
        setTimeout(wsConn, 1000);
      };
      setConnection(connection);
      const userId = JSON.parse(props.cookies.cookies.wheelsUser);
      const token = props.cookies.cookies.wheelsToken;
      misWheels(userId, token);
      todosWheels(userId, token);
      consultarCarros(userId, token);
    }
  }

  return (
    <Router>

      <Route path="/" render={() => <NavBar {...props} signout={signout} wsConnection={wsConnection} />} />
      <Route path="/" component={Home} exact />
      <Route path="/register" render={() => <Register {...props} funcionCookie={funcionCookie} signout={signout} wsConn={wsConn} />} />
      <Route path="/login" render={() => <Login {...props} funcionCookie={funcionCookie} signout={signout} wsConn={wsConn} />} />
      <Route path='/ppalLog' render={() => <PpalLog {...props} misWheels={serviciosPropios} servicios={servicios} funcionMisWheels={misWheels} funcionServicios={todosWheels}/>} />
      <Route path='/crearRuta' render={() => <CrearRuta {...props} carros={carros} consultarCarros={consultarCarros}/>} />
      <Route path='/misCarros' render={() => <MisCarros {...props} carros={carros} consultarCarros={consultarCarros} />} />
      <Route path='/rutasDisponibles' render={() => <RutasDisponibles {...props} carros={carros} />} />


    </Router>

  );
}

export default withCookies(App);
