// src/components/MenuDesplegable.js
import React from 'react';
// import './MenuDesplegable.css';

const MenuDesplegable = () => {
  return (
    <div className="menu-desplegable" id="menu-desplegable">
      <button className="cerrar-menu" id="boton-cerrar-menu">
        <p className="x-cerrar-menu">X</p>
      </button>
      <ul className="lista-menu">
        <li className="elemento-menu">Novedades</li>
        <li className="elemento-menu">
          <a href="/anillos" className="elemento-menu">Anillos</a>
        </li>
        <li className="sub-elemento-menu">
          <a href="/anillos" className="sub-elemento-menu">&nbsp;&nbsp;Anchos</a>
        </li>
        <li className="sub-elemento-menu">
          <a href="/anillos" className="sub-elemento-menu">&nbsp;&nbsp;Delgados</a>
        </li>
        <li className="sub-elemento-menu">
          <a href="/anillos" className="sub-elemento-menu">&nbsp;&nbsp;Simbólicos</a>
        </li>
        <li className="elemento-menu">
          <a href="/aros" className="elemento-menu">Aros</a>
        </li>
        {/* Otros elementos del menú */}
      </ul>
    </div>
  );
};

export default MenuDesplegable;
