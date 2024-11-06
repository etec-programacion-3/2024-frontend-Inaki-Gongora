// src/components/Header.js
import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImagenBuscar from "../assets/buscar.png";
import Carro from "../assets/carro.png";
import User from "../assets/user.png";
import Menu from "../assets/menu.png";
import './Header.css';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogo] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAuthNavigation = () => {
    if (isLoggedIn) {
      navigate('/perfil');
    } else {
      navigate('/login');
    }
  };

  // Manejador de desplazamiento para mostrar el logo al hacer scroll

  return (
    <header id="header">
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />

      {/* Solo muestra el logo cuando showLogo es true */}
      <Link to="/" className={`logo-marca ${showLogo ? "visible" : "oculto"}`} id="contenedor-titulo">
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
