import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MisCarros.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'

function AñadirCarro() {


  const [placas, setPlacas] = useState('');
  const [color, setColor] = useState('');
  const [cupos, setCupos] = useState(0);


  function handleSubmit(e) {
    e.preventDefault();
    console.log(placas, color, cupos);

  }


  return (
    <form className="form " onSubmit={handleSubmit}>
      <h1>Añadir nuevo carro</h1>
      <div className="form-group">
        <label htmlFor="marca">Marca de tu carro</label>
        <input type="text" className="form-control" id="marca" onChange={e => setPlacas(e.target.value)} placeholder="Ingresa la marca Ej. Mazda" />
      </div>
      <div className="form-group">
        <label htmlFor="linea">Linea de tu carro</label>
        <input type="text" className="form-control" id="linea" onChange={e => setPlacas(e.target.value)} placeholder="Ingresa la línea Ej. 3 Touring" />
      </div>
      <div className="form-group">
        <label htmlFor="placas">Placas de tu carro</label>
        <input type="text" pattern="[A-Z]{3}[-][0-9]{3}" className="form-control" id="placas" onChange={e => setPlacas(e.target.value)} placeholder="Ingresa las placas Ej. AAA-123" />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color de tu carro</label>
        <input type="text" className="form-control" id="color" onChange={e => setColor(e.target.value)} placeholder="Ingresa el color" />
      </div>
      <div className="form-group">
        <label htmlFor="cupos">Cupos</label>
        <input type="number" min="2" max="9" className="form-control" id="cupos" onChange={e => setCupos(e.target.value)} placeholder="Ingresa cantidad de pasajeros" />
      </div>
      <button type="submit" className="btn yellow-black">Agregar carro</button>
    </form>
  );
}

export default AñadirCarro;