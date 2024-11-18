import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <span>Configuración de las cookies</span>
        <span>|</span>
        <span>Nuestros Datos</span>
        <span>|</span>
        <span>Términos y Condiciones</span>
        <span>|</span>
        <span>Política de Cookies</span>
        <span>|</span>
        <span>Política de Privacidad</span>
        <span>|</span>
        <span>Seleccionar País</span>
        <span>|</span>
        <span>Reclamos</span>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Zephyr. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
