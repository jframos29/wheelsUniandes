import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/logo.png'
import './NavBar.css';
import { useHistory } from "react-router-dom";

function NavBar(props) {


  let history = useHistory();

  function irRegistro(e) {
    e.preventDefault();
    history.push("/register");

  }

  function irInicio(e) {
    e.preventDefault();
    history.push("/login");
  }

  function irHome(e) {
    e.preventDefault();
    history.push("/");
  }

  function irPpal(e) {
    e.preventDefault();
    history.push("/ppalLog");
  }

  function cerrarSesion(e) {
    e.preventDefault();
    props.signout(e);
    irHome(e);
  }

  function misCarros(e) {
    e.preventDefault();
    history.push("/misCarros");
  }
  console.log(props);

  return (
    !props.cookies.cookies.wheelsUser || !props.cookies.cookies.wheelsToken ?
      <nav className="navbar navbar-light navbar-custom">
        <a onClick={irHome} className="navbar-brand">

          <img alt="logo" id="logo-brand" src={logo}></img>
        </a>
        <form className="form-inline">
          <button onClick={irRegistro} className="btn my-2 my-sm-0 yellow" >Regístrate</button>
          <button onClick={irInicio} className="btn my-2 my-sm-0 yellow" >Inicia sesión</button>
        </form>
      </nav>
      :
      <nav className="navbar navbar-light navbar-custom">
        <a onClick={irPpal} className="navbar-brand">

          <img alt="logo" id="logo-brand" src={logo}></img>
        </a>
        <form className="form-inline" onSubmit={cerrarSesion}>
          <button onClick={misCarros} className="btn my-2 my-sm-0 yellow" >Mis Carros</button>
          <button type="submit" className="btn my-2 my-sm-0 yellow" >Cerrar sesión</button>
        </form>
      </nav>
  );
}

export default NavBar;