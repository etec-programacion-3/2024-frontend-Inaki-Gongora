import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    link.integrity = 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';
    document.head.appendChild(link);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleLoginRedirect = () => {
    navigate('/Login'); // Cambia la ruta según la que hayas definido para "Iniciar sesión"
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-texto'>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre"><i className="fa-solid fa-user"></i> Nombre</label>
            <input
              type="text"
              id="nombre"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <section className='seccion-contrasena'>
            <div className="form-group">
              <label htmlFor="password"><i className="fa-solid fa-lock"></i> Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="repetir-password"><i className="fa-solid fa-lock"></i> Repetir contraseña</label>
              <input
                type="password"
                id="repetir-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </section>
          <div className="form-group">
            <label htmlFor="telefono"><i className="fa-solid fa-phone"></i> Número de teléfono</label>
            <input
              type="tel"
              id="telefono"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="direccion"><i className="fa-solid fa-home"></i> Dirección</label>
            <input
              type="text"
              id="direccion"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="create-button">
            <i className="fas fa-user-plus"></i> Crear cuenta
          </button>
          <p className='cuenta-preg'>¿Ya tienes cuenta?</p>
          <button type="button" className="login-button" onClick={handleLoginRedirect}>
            <i className="fa-solid fa-arrow-right"></i> Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
