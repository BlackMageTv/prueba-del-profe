import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './componentes/inicio';
import RegistroUsuario from './componentes/Registarse';
import './App.css';

function Aplicacion() {
  return (
    <div className="contenedor-app">
      <Router>
        <Routes>
          <Route path="/" element={<InicioSesion />} />
          <Route path="/registro" element={<RegistroUsuario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Aplicacion;
