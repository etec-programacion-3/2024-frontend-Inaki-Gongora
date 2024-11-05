// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImagenBuscar from "../assets/buscar.png";
import Carro from "../assets/carro.png";
import User from "../assets/user.png";
import Menu from "../assets/menu.png";
import './Header.css';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleAuthNavigation = () => {
    if (isLoggedIn) {
      navigate('/perfil');
    } else {
      navigate('/login');
    }
  };

  return (
    <header id="header">
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />

      <div className="div-contacto">
        <Link to="/contacto" className="contacto-link">
          <p className="contacto-texto" id="contacto-texto">CONTACTO</p>
        </Link>
      </div>

      <Link to="/" className="logo-marca" id="contenedor-titulo">
        <p className="logo-texto">ZEPHYR</p>
      </Link>

      <div className="botones-header" id="botones-header">
        <button className="icono-buscar" id="icono-buscar">
          <img src={ImagenBuscar} alt="buscar" id="lupa-buscar" />
        </button>

        <Link to="/carrito" className="icono-carro" id="icono-carro">
          <img src={Carro} alt="carro" />
        </Link>

        {/* Navega al perfil o login según el estado de autenticación */}
        <button onClick={handleAuthNavigation} className="icono-usuario" id="icono-usuario">
          <img src={User} alt="usuario" />
        </button>

        <button className="icono-menu" id="icono-menu">
          <img src={Menu} alt="menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;