import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './crearRuta.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'

function CrearRuta() {

  const backUrl = "http://localhost:3001";

  const unirse = ()=>{
    (async () => {
      const user = this.props.cookies.get('wheels-user');

      const req = await fetch(`${backUrl}/loQueQuieroHacer`, {
        method:'POST',
        body:{},
        headers: {
          'Authorization': `Bearer ${this.props.cookies.get('wheels-token')}`,
          'user': JSON.stringify(user),
          'Content-Type': 'application/json'
        }
      });
      const rta = await req.json();
      //usa la respuesta
    })();
  }

  return (
    true ?
      <div className="App">
        <div className="container heading">
          <h1>Bienvenido usuario </h1>
          <div className="row heading">
            <div className="col">
            <button className="btn yellow-black">Crear ruta de Wheels</button>
            <img className="wheels" src={crear} ></img>

            </div>
            <div className="col">
            <button className="btn yellow-black" onClick={unirse}>Unirse a ruta de Wheels</button>
            <img className="wheels" src={unirse} ></img>

            </div>
          </div>
        </div>
      </div>
      :
      <div></div>
  );
}

export default CrearRuta;