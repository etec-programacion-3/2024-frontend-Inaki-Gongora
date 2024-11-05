// src/pages/Usuario/Perfil.jsx
import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Perfil.css';

const Perfil = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        
        const response = await fetchUserProfile(token);
        setUserInfo(response);
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
        setError(error.response?.data?.message || 'Error desconocido');
      }
    };

    fetchPerfil();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="perfil-container">
      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : userInfo ? (
        <div>
          <div className="perfil-header">
            <h1>Perfil</h1>
          </div>
          <div className="perfil-info">
            <p>Nombre: {userInfo.nombre}</p>
            <p>Teléfono: {userInfo.telefono}</p>
            <p>Dirección: {userInfo.direccion}</p>
          </div>
          <button onClick={handleLogout} className="perfil-button">Cerrar Sesión</button>
        </div>
      ) : (
        <p className="loading-message">Cargando...</p>
      )}
    </div>
  );
};

export default Perfil;