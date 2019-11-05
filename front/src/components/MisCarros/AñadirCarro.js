import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MisCarros.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'

function AñadirCarro(props) {


  const [marca, setMarca] = useState('');
  const [linea, setLinea] = useState('');
  const [placas, setPlacas] = useState('');
  const [color, setColor] = useState('');
  const [cupos, setCupos] = useState(0);

  const backUrl = "http://wheelsuniandes.herokuapp.com/";
  const actualUser = JSON.parse(props.cookies.cookies.wheelsUser).uid;
  const body = {
    "uid":actualUser,
    "carro": {"marca": marca,
      "linea": linea,
      "placas": placas,
      "color": color,
      "cupos": cupos
    }
  };


  const crearCarro = ()=>{
    (async () => {
      const user = props.cookies.get('wheelsUser');
      const req = await fetch(`${backUrl}/cars/agregarcarro`, {
        method:'POST',
        body: JSON.stringify(body),
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

  function handleSubmit(e) {
    e.preventDefault();
    crearCarro();

  }
  return (
    props.cookies.cookies.wheelsToken ?
    <form className="form " onSubmit={handleSubmit}>
      <h1>Añadir nuevo carro </h1>
      <div className="form-group">
        <label htmlFor="marca">Marca de tu carro</label>
        <input required type="text" className="form-control" id="marca" onChange={e => setMarca(e.target.value)} placeholder="Ingresa la marca Ej. Mazda" />
      </div>
      <div className="form-group">
        <label htmlFor="linea">Linea de tu carro</label>
        <input required type="text" className="form-control" id="linea" onChange={e => setLinea(e.target.value)} placeholder="Ingresa la línea Ej. 3 Touring" />
      </div>
      <div className="form-group">
        <label htmlFor="placas">Placas de tu carro</label>
        <input required type="text" pattern="[A-Z]{3}[-][0-9]{3}" className="form-control" id="placas" onChange={e => setPlacas(e.target.value)} placeholder="Ingresa las placas Ej. AAA-123" />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color de tu carro</label>
        <input required type="text" className="form-control" id="color" onChange={e => setColor(e.target.value)} placeholder="Ingresa el color" />
      </div>
      <div className="form-group">
        <label htmlFor="cupos">Cupos</label>
        <input required type="number" min="2" max="9" className="form-control" id="cupos" onChange={e => setCupos(e.target.value)} placeholder="Ingresa cantidad de pasajeros" />
      </div>
      <button type="submit" className="btn yellow-black">Agregar carro</button>
    </form>
    :
    <div className="App heading"><h2>Redirígete a <a href="/"> la página principal</a>. <br/> Debes iniciar sesión para usar el contenido de Wheels Uniandes</h2></div>
  );
}

export default AñadirCarro;