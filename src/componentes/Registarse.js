import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function RegistroUsuario() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleFinalizar = () => {
    console.log('Registro completado:', { nombreUsuario, fechaNacimiento, correo, clave });
  };

  return (
    <div className="form-registro">
      <h2>Registro</h2>
      <Form>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleFinalizar}>
          Terminar
        </Button>
      </Form>
    </div>
  );
}

export default RegistroUsuario;
