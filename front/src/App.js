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
// 0: Home
// 1: InicioSesion
// 2: Register
// 3: PpalLog

function App(props) {
  const [vista, setVista] = useState(0);
  const [loggeado, setLoggeado] = useState(false);


  const funcionCookie = (cookie, user) => {
    props.cookies.set('wheelsToken', cookie, { path: '/' });
    props.cookies.set('wheelsUser', { "uid": user });

  }

  const signout = (e) => {
    e.preventDefault();
    props.cookies.set('wheelsUser', '');
    props.cookies.set('wheelsToken', '');
  }


  return (
    <Router>

      <Route path="/" render={() => <NavBar {...props} signout={signout} />} />
      <Route path="/" component={Home} exact />
      <Route path="/register" render={() => <Register {...props} funcionCookie={funcionCookie} signout={signout} />}  />
      <Route path="/login" render={() => <Login {...props} funcionCookie={funcionCookie} />} />
      <Route path='/ppalLog' render={() => <PpalLog {...props} />}/>
      <Route path='/crearRuta' component={CrearRuta} />
      <Route path='/misCarros' render={() => <MisCarros {...props}  />} />
      

    </Router>

  );
}

export default withCookies(App);
