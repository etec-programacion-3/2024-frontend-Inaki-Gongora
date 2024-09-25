import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Zephyr</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/anillos">Anillos</Link></li>
          <li><Link to="/aros">Aros</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
