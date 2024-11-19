import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/anillos">Anillos</Link>
      <Link to="/aros">Aros</Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="/login">Usuario</Link>
    </nav>
  );
}

export default Navbar;