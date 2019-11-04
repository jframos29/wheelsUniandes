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
// 0: Home
// 1: InicioSesion
// 2: Register
// 3: PpalLog

function App(props) {
  const [vista, setVista] = useState(0);

  const [loggeado, setLoggeado] = useState(false);

  const funcionCookie = (cookie, user) => {
    props.cookies.set('wheels-token', cookie, { path: '/' });
    props.cookies.set('wheels-user', { "uid": user });
  }

  const signout = () => {
    props.cookies.set('wheels-user', null);
    props.cookies.set('wheels-token', null);
  }


  return (
    <Router>

      <Route path="/" render={() => <NavBar loggeado={loggeado} vista={vista} signout={signout} />} />
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" render={(props) => <Login {...props} funcionCookie={funcionCookie} />} />
      <Route path='/ppalLog' component={PpalLog} />
      <Route path='/crearRuta' component={CrearRuta} />

    </Router>

  );
}

export default withCookies(App);
