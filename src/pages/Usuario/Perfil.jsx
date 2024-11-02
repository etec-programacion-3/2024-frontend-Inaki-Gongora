import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de importar el contexto

const Perfil = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth(); // Acceder a la función de logout

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirigir si no hay token
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
    logout(); // Usar la función de logout del contexto
    navigate('/login');
  };

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : userInfo ? (
        <div>
          <h1>Perfil</h1>
          <p>Nombre: {userInfo.nombre}</p>
          <p>Teléfono: {userInfo.telefono}</p>
          <p>Dirección: {userInfo.direccion}</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Perfil;