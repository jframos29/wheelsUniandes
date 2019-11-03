import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/logo2.png'
import Register from './components/Register/Register';
// 0: Home
// 1: InicioSesion
// 2: Register
// 3: PpalLog


function Home() {
  const [vista, setVista] = useState(0);
  const [loggeado, setLoggeado] =useState(false);
  
  return (
    vista === 0 || !loggeado ?
      <div className="App">
        <div className="container">
          <div className="heading">
            <h1>Wheels Uniandes</h1>
            <img alt="logo" id="logo" src={logo}></img>
            <div className="heading">
              <i><h4>Únete y haz que tu experiencia de movilidad  <br />hacia la U sea mucho más agradable</h4></i>
            </div>
            <div className="heading">
              <p>¡Regístrate, Crea rutas de Wheels o Únete a otra rutas!</p>
            </div>
          </div>
        </div>
      </div>
      :
      vista === 1 ?
      <div>
        <Login></Login>
      </div>
        :
        vista === 2 ?
        <div>
        <Register></Register>
      </div>
          :
          <div>ERROR</div>
  );
}

export default Home;
