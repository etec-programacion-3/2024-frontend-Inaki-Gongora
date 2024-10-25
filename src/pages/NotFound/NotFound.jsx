// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='NotFoundFondo'>
      <div className='BoxNotFound'>
        <h1 className='T404'>404 - Página no encontrada</h1>
        <p className='Texto'>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/">
          <button className= 'Boton'>
            Ir al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;