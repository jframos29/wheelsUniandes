import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';
import { useHistory } from "react-router-dom";

function Register(props) {


  let history = useHistory();
  const backUrl = "http://localhost:3001";

  const [correo, setCorreo] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [error, setError] = useState(false);
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(pw!=pwConfirm) {
      setError(true);
    }
    else {
      registrar(evt);
    }
    console.log(correo);
    console.log(pw);
    console.log(pwConfirm);
}

const registrar = (e) => {
  (async () => {
    e.preventDefault();
    const data = {
      uid: correo,
      password: pw
    };
    const req = await fetch(`${backUrl}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    const rta = await req.json();
    console.log(props);
    
    props.funcionCookie(rta.opstoken, correo);

    history.push("/ppalLog");
  })();
};

  return (
    true ?
<div className="App">
          <div className="container heading">
            <h2>Registro</h2>
            <div className="heading">
              <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-3"></div>
                <div className="col-sm-8 col-md-8 col-lg-6">
                  <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="user">Usuario</label>
                    <input type="text" className="form-control" id="user" onChange={e => setCorreo(e.target.value)}placeholder="Ingresa tu usuario" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pw">Contraseña</label>
                    <input type="password" className="form-control" id="pw" onChange={e => setPw(e.target.value)} placeholder="Contraseña" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pw-confirm">Confimación contraseña</label>
                    <input type="password" className="form-control" id="pw-confirm" onChange={e => setPwConfirm(e.target.value)} placeholder="Confirma tu contraseña" />
                  </div>
                  {error ?
                  <div className="text-danger">Las contraseñas ingresadas no coinciden</div>
                  :
                  <div></div>
                  }
                  <button type="submit" className="btn yellow-black">Regístrate</button>
                </form>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-3"></div>
              </div>
              
            </div>
          </div>
        </div>
        :
        <div></div>
  );
}

export default Register;