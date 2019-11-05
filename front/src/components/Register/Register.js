import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';
import { useHistory } from "react-router-dom";

function Register(props) {


  let history = useHistory();
  const backUrl = "http://wheelsuniandes.herokuapp.com/";
  const wsUrl = "ws://wheelsuniandes.herokuapp.com/";


  const [correo, setCorreo] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(pw!=pwConfirm) {
      setError(true);
    }
    else {
      registrar(evt);
    }
}

const registrar = (e) => {
  (async () => {
    e.preventDefault();
    setError(false);
    setError2(false);
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
    props.funcionCookie(rta.token, correo);
    if(props.cookies.cookies.wheelsToken==="" || props.cookies.cookies.wheelsToken==="undefined" ) {
      setError2(true);
    props.signout(e);
    }
    else {
      history.push("/ppalLog");
      props.wsConn();
      // const temp = JSON.parse(props.cookies.cookies.wheelsUser);
      // const connection = new WebSocket(wsUrl);
      // connection.onopen = () => {
      //   connection.send(temp.uid);
      // }
    }
  })();
};

  return (
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
                    <input required type="text" className="form-control" id="user" onChange={e => setCorreo(e.target.value)}placeholder="Ingresa tu usuario" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pw">Contraseña</label>
                    <input required type="password" className="form-control" id="pw" onChange={e => setPw(e.target.value)} placeholder="Contraseña" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pw-confirm">Confimación contraseña</label>
                    <input required type="password" className="form-control" id="pw-confirm" onChange={e => setPwConfirm(e.target.value)} placeholder="Confirma tu contraseña" />
                  </div>
                  {
                    error2 ?
                    <div className="text-danger">Este usuario ya existe</div>
                    :
                    <div></div>
                  }
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
  );
}

export default Register;