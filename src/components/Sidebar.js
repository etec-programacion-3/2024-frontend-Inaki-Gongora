// src/components/Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleAuthNavigation = () => {
    if (isLoggedIn) {
      navigate('/perfil'); // Redirige a "Mi perfil" si está autenticado
    } else {
      navigate('/login'); // Redirige a "Iniciar sesión" si no está autenticado
    }
    closeSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={closeSidebar}>X</button>
      <div className="sidebar-content">
        <Link to="/anillos" onClick={closeSidebar} className="sidebar-link">Anillos</Link>
        <Link to="/aros" onClick={closeSidebar} className="sidebar-link">Aros</Link>

        <div className="sidebar-spacer" /> {/* Espacio en blanco de separación */}

        <button onClick={handleAuthNavigation} className="sidebar-link">
          {isLoggedIn ? 'Mi perfil' : 'Iniciar sesión'}
        </button>
        <Link to="/carrito" onClick={closeSidebar} className="sidebar-link">Su carrito</Link>
        <Link to="/contacto" onClick={closeSidebar} className="sidebar-link">Póngase en contacto</Link>
      </div>
    </div>
  );
};

export default Sidebar;