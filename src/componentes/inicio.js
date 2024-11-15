import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function InicioSesion() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const handleIniciar = () => {
    localStorage.setItem('nombreUsuario', nombreUsuario);
    localStorage.setItem('clave', clave);
    console.log('Usuario ingresando:', nombreUsuario);
  };

  const handleRegistro = () => {
    navigate('/registro'); // Navega al componente de registro
  };

  return (
    <div className="form-sesion">
      <h2>Inicio de Sesión</h2>
      <Form>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pon un usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa la contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </Form.Group>
        <div className="button-group">
          <Button variant="primary" type="button" onClick={handleIniciar}>
            Ingresar
          </Button>
          <Button variant="secondary" type="button" onClick={handleRegistro} className="ml-2">
            Registrarse
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default InicioSesion;
