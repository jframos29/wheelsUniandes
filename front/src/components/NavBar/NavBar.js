import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/logo.png'
import './NavBar.css';
import { useHistory } from "react-router-dom";

function NavBar({ loggeado, vista }) {


  let history = useHistory();

  function irRegistro(e) {
    e.preventDefault();
    history.push("/register");

  }

  function irInicio(e) {
    e.preventDefault();
    history.push("/login");
  }

  return (
    !loggeado ?
      <nav className="navbar navbar-light navbar-custom">
        <a href="#" className="navbar-brand">
          Wheels
          <img alt="logo" id="logo-brand" src={logo}></img>
        </a>
        <form className="form-inline">
          <button onClick={irRegistro} className="btn my-2 my-sm-0 yellow" >Regístrate</button>
          <button onClick={irInicio} className="btn my-2 my-sm-0 yellow" >Inicia sesión</button>
        </form>
      </nav>
      :
      <nav className="navbar navbar-light navbar-custom">
        <a href="#" className="navbar-brand">
          Wheels Uniandes
          {/* <img alt="logo" id="logo-brand" src={logo}></img> */}
        </a>
        <form className="form-inline">
          <button className="btn my-2 my-sm-0 yellow" >Cerrar sesión</button>
        </form>
      </nav>
  );
}

export default NavBar;