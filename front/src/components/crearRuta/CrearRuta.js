import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './crearRuta.css';
import unirse from '../../assets/unirse.png'
import crear from '../../assets/crear.png'

function CrearRuta() {

  const [placas, setPlacas] = useState('');
  const [color, setColor] = useState('');
  const [cupos, setCupos] = useState(0);
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [hora, setHora] = useState('');
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(origen, destino, hora);
    
  }

  const backUrl = "http://localhost:3001";

  const unirse = ()=>{
    (async () => {
      const user = this.props.cookies.get('wheelsUser');

      const req = await fetch(`${backUrl}/loQueQuieroHacer`, {
        method:'POST',
        body:{},
        headers: {
          'Authorization': `Bearer ${this.props.cookies.get('wheelsToken')}`,
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
          <h1>Crea una nueva ruta usuario </h1>
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-3"></div>
            <div className="col-sm-8 col-md-8 col-lg-6">
              <form className="form heading" onSubmit={handleSubmit}>
               
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
                  <label htmlFor="carro">Elige el carro de esta ruta</label>
                  <select className="form-control" id="carro" placeholder="Elige el carro">
                    <option>Elige uno de tus carros</option>
                    <option value="bla">bla</option>
                  </select>
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

export default CrearRuta;