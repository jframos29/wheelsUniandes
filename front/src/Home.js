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

  
  return (
      <div className="App">
        <div className="container">
          <div className="heading">
            <h1>Wheels Uniandes</h1>
            <img alt="logo" id="logo" src={logo}></img>
            <div className="heading">
              <i><h4>Únete y haz que tu experiencia de movilidad  <br />hacia la U sea mucho más agradable</h4></i>
    
            </div>
            <div className="heading">
              <p>¡<a href="/register">Regístrate</a>, Crea rutas de Wheels o Únete a otra rutas!</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
