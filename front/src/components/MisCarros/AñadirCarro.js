import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MisCarros.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'

function MisCarros() {

  const [placas, setPlacas] = useState('');
  const [color, setColor] = useState('');
  const [cupos, setCupos] = useState(0);
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [hora, setHora] = useState('');
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(placas, color, cupos, origen, destino, hora);
    
  }

  

  return (
    true ?
      <div className="App">
        <div className="container heading">
          <h1>Mis carros </h1>
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
            <div className="col-sm-8 col-md-8 col-lg-6">
              <form className="form heading" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="placas">Placas de tu carro</label>
                  <input type="text" pattern="[A-Z]{3}[-][0-9]{3}" className="form-control" id="placas" onChange={e => setPlacas(e.target.value)} placeholder="Ingresa las placas Ej. AAA-123" />
                </div>
                <div className="form-group">
                  <label htmlFor="color">Color de tu carro</label>
                  <input type="text" className="form-control" id="color" onChange={e => setColor(e.target.value)} placeholder="Ingresa el color" />
                </div>
                <div className="form-group">
                  <label htmlFor="origen">Origen de tu ruta</label>
                  <input type="text" className="form-control" id="origen" onChange={e => setOrigen(e.target.value)} placeholder="Ingresa desde dónde sales" />
                </div>
                <div className="form-group">
                  <label htmlFor="destino">Destino de tu ruta</label>
                  <input type="text" className="form-control" id="destino" onChange={e => setDestino(e.target.value)} placeholder="Ingresa cuál es tu destino" />
                </div>
                <div className="form-group">
                  <label htmlFor="hora">Hora de salida</label>
                  <input type="text" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" className="form-control" id="hora" onChange={e => setHora(e.target.value)} placeholder="Ingresa a qué hora sales Ej. 14:00" />
                </div>
                <div className="form-group">
                  <label htmlFor="cupos">Cupos</label>
                  <input type="number" min="2" max="7" className="form-control" id="cupos" onChange={e => setCupos(e.target.value)} placeholder="Ingresa cantidad de pasajeros" />
                </div>
                <button type="submit" className="btn yellow-black">Crear ruta</button>
              </form>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
          </div>        </div>
      </div>
      :
      <div></div>
  );
}

export default MisCarros;