import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';
function Register() {

  const [correo, setCorreo] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(correo);
    console.log(pw);
    console.log(pwConfirm);
}

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
                    <label htmlFor="correo">Correo electrónico</label>
                    <input type="email" className="form-control" id="correo" onChange={e => setCorreo(e.target.value)}placeholder="Ingresa tu correo" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pw">Contraseña</label>
                    <input type="password" className="form-control" id="pw" onChange={e => setPw(e.target.value)} placeholder="Contraseña" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pw-confirm">Confimación contraseña</label>
                    <input type="password" className="form-control" id="pw-confirm" onChange={e => setPwConfirm(e.target.value)} placeholder="Confirma tu contraseña" />
                  </div>
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