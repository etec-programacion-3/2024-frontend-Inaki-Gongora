import React from 'react';
import { Link } from 'react-router-dom';
import ImagenBuscar from "../assets/buscar.png";
import Carro from "../assets/carro.png";
import User from "../assets/user.png";
import Menu from "../assets/menu.png";

const Header = () => {
  return (
    <header 
      id="header" 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 40px', 
        borderBottom: '1px solid #ddd',
        transition: 'top 0.5s ease' 
      }}
    >
      <div className="div-contacto" style={{ flex: '1' }}>
        <Link to="/contacto" className="contacto-a" style={{ textDecoration: 'none', color: '#000' }}>
          <p className="contacto-texto" id="contacto-texto" style={{ fontSize: '16px', fontWeight: 'bold' }}>CONTACTO</p>
        </Link>
      </div>
      <div className="botones-header" id="botones-header" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
        <button className="icono-buscar" id="icono-buscar" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={ImagenBuscar} alt="buscar" id="lupa-buscar" style={{ width: '40px' }} />
        </button>
        <Link to="/carro" className="icono-carro" id="icono-carro" style={{ textDecoration: 'none' }}>
          <img src={Carro} alt="carro" style={{ width: '40px' }} />
        </Link>
        <button className="icono-usuario" id="icono-usuario" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={User} alt="usuario" style={{ width: '40px' }} />
        </button>
        <button className="icono-menu" id="icono-menu" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={Menu} alt="menu" style={{ width: '40px' }} />
        </button>
      </div>
    </header>
  );
};

export default Header;
