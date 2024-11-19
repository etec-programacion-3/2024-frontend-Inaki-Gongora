import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImagenBuscar from "../assets/buscar.png";
import Carro from "../assets/carro.png";
import User from "../assets/user.png";
import Menu from "../assets/menu.png";
import './Header.css';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';

const Header = () => {
  const { isLoggedIn, token } = useAuth(); // Asegúrate de que `useAuth` devuelve `isLoggedIn` y `token`.
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Estado para visibilidad
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isTokenValid = () => {
    if (!token) return false; // Si no hay token, no es válido.
    try {
      const { exp } = JSON.parse(atob(token.split('.')[1])); // Decodifica el payload del JWT.
      const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos.
      return exp > currentTime; // Valida si el token no ha expirado.
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return false;
    }
  };

  const handleAuthNavigation = () => {
    if (isLoggedIn && isTokenValid()) {
      // Si está logueado y el token es válido, ve a perfil.
      navigate('/perfil');
    } else {
      // Si no, ve a login.
      navigate('/login');
    }
  };

  // Detectar desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mostrar header si se desplaza hacia abajo
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header id="header" className={isVisible ? 'visible' : 'hidden'}>
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />

      <Link to="/" className="logo-marca" id="contenedor-titulo">
        <p className="logo-texto">ZEPHYR</p>
      </Link>

      <div className="botones-header" id="botones-header">
        <Link to="/buscar" className="icono-buscar" id="icono-buscar">
          <img src={ImagenBuscar} alt="buscar" id="lupa-buscar" />
        </Link>

        <Link to="/carrito" className="icono-carro" id="icono-carro">
          <img src={Carro} alt="carro" />
        </Link>

        <button onClick={handleAuthNavigation} className="icono-usuario" id="icono-usuario">
          <img src={User} alt="usuario" />
        </button>

        <button onClick={toggleSidebar} className="icono-menu" id="icono-menu">
          <img src={Menu} alt="menu" />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;