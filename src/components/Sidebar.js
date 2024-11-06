// src/components/Sidebar.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Deshabilita el scroll
    } else {
      document.body.style.overflow = 'auto'; // Habilita el scroll
    }

    return () => {
      document.body.style.overflow = 'auto'; // Asegura que el scroll vuelva a la normalidad al desmontar
    };
  }, [isOpen]);

  const handleAuthNavigation = () => {
    if (isLoggedIn) {
      navigate('/perfil');
    } else {
      navigate('/login');
    }
    closeSidebar();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeSidebar}>X</button>
        <div className="sidebar-content">
          <Link to="/" onClick={closeSidebar} className="sidebar-link">Novedades</Link>
          <Link to="/anillos" onClick={closeSidebar} className="sidebar-link">Anillos</Link>
          <Link to="/aros" onClick={closeSidebar} className="sidebar-link">Aros</Link>

          <div className="sidebar-spacer"></div>

          <button onClick={handleAuthNavigation} className="sidebar-link">
            {isLoggedIn ? 'Mi perfil' : 'Iniciar sesión'}
          </button>
          <Link to="/carrito" onClick={closeSidebar} className="sidebar-link">Su carrito</Link>
          <Link to="/contacto" onClick={closeSidebar} className="sidebar-link">Póngase en contacto</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;