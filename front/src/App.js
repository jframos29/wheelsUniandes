import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Home'
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PpalLog from "./components/PpalLog/PpalLog";
// 0: Home
// 1: InicioSesion
// 2: Register
// 3: PpalLog


function App() {
  const [vista, setVista] = useState(0);
  const [loggeado, setLoggeado] =useState(false);
  
  return (
    <Router>
      <Route path="/" render={(props) => <NavBar {...props} loggeado={loggeado} vista={ vista} />}    />
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path='/ppalLog' component={PpalLog} />
      
    </Router>
   
  );
}

export default App;
