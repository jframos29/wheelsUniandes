import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MisCarros.css';
import unirse from '../../assets/unirse.png';
import crear from '../../assets/crear.png';
import AñadirCarro from './AñadirCarro';

function MisCarros(props) {

  const [agregar, setAgregar] = useState(false);

  function agregarCarro() {
    setAgregar(true);
  }
  const carros = props.consultarCarros(JSON.parse(props.cookies.cookies.wheelsUser), props.cookies.cookies.wheelsToken);


  return (
    props.cookies.cookies.wheelsToken ?
      <div className="App">
        <div className="container heading">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-5">
              <h1>Tus carros, {props.allCookies.wheelsUser.uid} </h1>
              {props.carros.length > 0 ?
                props.carros.map((element) => {
                  return <p key={element.placas}>
                    {element.marca} {element.linea} de placas <strong>{element.placas}</strong>
                  </p>
                })
                :
                <p>Aún no tienes carros :(</p>}
            </div>
            <div className=" col-md-2 col-lg-2"></div>
            <div className="col-sm-12 col-md-5 col-lg-5 ">
              {agregar ?
                <AñadirCarro {...props} />
                :
                <div className="App">
                  <div>
                    <button onClick={agregarCarro} className="btn yellow-black">Agregar carro</button>
                  </div>
                  <div className="App">
                    <img className="wheels-2" src={unirse}></img>
                  </div>
                </div>
              }


            </div>
          </div>
        </div>
      </div>
      :
      <div className="App heading"><h2>Redirígete a <a href="/"> la página principal</a>. <br /> Debes iniciar sesión para usar el contenido de Wheels Uniandes</h2></div>
  );
}

export default MisCarros;