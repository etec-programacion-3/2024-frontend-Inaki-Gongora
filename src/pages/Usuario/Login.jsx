import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
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

  const handleCreateAccount = () => {
    navigate('/Registro'); // Cambia la ruta según la que hayas definido para "Crear cuenta"
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-texto'>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"> <i className="fa-solid fa-user"></i> Email</label>
            <input
              className='email'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> <i className="fa-solid fa-lock"></i> Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            <i className="fa-solid fa-arrow-right"></i> Iniciar sesión
          </button>
          <button type="button" className="create-button" onClick={handleCreateAccount}>
            <i className="fas fa-user-plus"></i> Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
