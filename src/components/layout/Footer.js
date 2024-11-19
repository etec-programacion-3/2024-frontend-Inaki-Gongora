import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <Link to="/develop" className="footer-link">Configuración de las cookies</Link>
        <span>|</span>
        <Link to="/develop" className="footer-link">Nuestros Datos</Link>
        <span>|</span>
        <Link to="/develop" className="footer-link">Términos y Condiciones</Link>
        <span>|</span>
        <Link to="/develop" className="footer-link">Política de Cookies</Link>
        <span>|</span>
        <Link to="/develop" className="footer-link">Política de Privacidad</Link>
        <span>|</span>
        <Link to="/develop" className="footer-link">Seleccionar País</Link>
        <span>|</span>
        <Link to="/develop" className="footer-link">Reclamos</Link>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Zephyr. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
