// src/pages/Usuario/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de tener axios instalado
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const API_URL = 'http://localhost:3000/api/usuarios/'; // Cambia esto según la URL de tu backend

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.post(`${API_URL}login`, { email, contraseña: password });

      if (response.data.token) {
        // Eliminar todo lo relacionado con jwt_decode
        const token = response.data.token;
        
        login(token); // Llama a login con el token
        localStorage.setItem('token', token); // Guardamos el token en localStorage

        navigate('/perfil'); // Redirige al perfil después del inicio de sesión
      } else {
        setErrorMessage('Email o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage('Ocurrió un error al intentar iniciar sesión.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/Registro'); // Cambia la ruta según la que hayas definido para "Crear cuenta"
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-texto'>Iniciar Sesión</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mensaje de error */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"> <i className="fa-solid fa-user"></i> Email</label>
            <input
              className='email'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> <i className="fa-solid fa-lock"></i> Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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