import React from 'react';
import { Link } from 'react-router-dom';
import ImagenBuscar from "../assets/buscar.png";
import Carro from "../assets/carro.png";
import User from "../assets/user.png";
import Menu from "../assets/menu.png";
import './Header.css';  // Importa el archivo CSS

const Header = () => {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
      </head>
      <header id="header">
        <div className="div-contacto">
          <Link to="/contacto" className="contacto-a">
            <p className="contacto-texto" id="contacto-texto">CONTACTO</p>
          </Link>
        </div>
        <Link to="/" className="logo-marca" id="contenedor-titulo">
          <p className="logo-texto">ZEPHYR®</p>
        </Link>
        <div className="botones-header" id="botones-header">
          <button className="icono-buscar" id="icono-buscar">
            <img src={ImagenBuscar} alt="buscar" id="lupa-buscar" />
          </button>
          <Link to="/carrito" className="icono-carro" id="icono-carro">
            <img src={Carro} alt="carro" />
          </Link>
          <Link to="/login" className="icono-usuario" id="icono-usuario">
            <img src={User} alt="usuario" />
          </Link>
          <button className="icono-menu" id="icono-menu">
            <img src={Menu} alt="menu" />
          </button>
        </div>
      </header>
    </html>
  );
};

export default Header;
