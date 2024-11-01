// src/pages/Anillos/Anillos.jsx
import React from 'react';
import './Anillos.css';

const Anillos = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Anillo de Plata',
      descripcion: 'Elegante anillo de plata con diseño minimalista.',
      precio: 25.99,
      imagen: './../../src/assets/anillo1.' // Ruta de ejemplo
    },
    {
      id: 2,
      nombre: 'Anillo de Oro',
      descripcion: 'Anillo de oro clásico con detalles sofisticados.',
      precio: 150.0,
      imagen: './../../assets/fondo-landing-copia.png' // Ruta de ejemplo
    },
    {
      id: 3,
      nombre: 'Anillo de Diamante',
      descripcion: 'Anillo con incrustación de diamante auténtico.',
      precio: 1200.99,
      imagen: 'src/assets/imagenes/anillo-diamante.jpg' // Ruta de ejemplo
    },
    {
      id: 4,
      nombre: 'Anillo de Esmeralda',
      descripcion: 'Anillo con hermosa esmeralda y acabado en oro blanco.',
      precio: 950.5,
      imagen: 'src/assets/imagenes/anillo-esmeralda.jpg' // Ruta de ejemplo
    },
    {
      id: 5,
      nombre: 'Anillo de Zafiro',
      descripcion: 'Elegante anillo con zafiro genuino en el centro.',
      precio: 875.25,
      imagen: 'src/assets/imagenes/anillo-zafiro.jpg' // Ruta de ejemplo
    },
    {
      id: 6,
      nombre: 'Anillo de Zafiro',
      descripcion: 'Elegante anillo con zafiro genuino en el centro.',
      precio: 875.25,
      imagen: 'src/assets/imagenes/anillo-zafiro.jpg' // Ruta de ejemplo
    },
    {
      id: 7,
      nombre: 'Anillo de Zafiro',
      descripcion: 'Elegante anillo con zafiro genuino en el centro.',
      precio: 875.25,
      imagen: 'src/assets/imagenes/anillo-zafiro.jpg' // Ruta de ejemplo
    },
    {
      id: 8,
      nombre: 'Anillo de Zafiro',
      descripcion: 'Elegante anillo con zafiro genuino en el centro.',
      precio: 875.25,
      imagen: 'src/assets/imagenes/anillo-zafiro.jpg' // Ruta de ejemplo
    },
    {
      id: 9,
      nombre: 'Anillo de Zafiro',
      descripcion: 'Elegante anillo con zafiro genuino en el centro.',
      precio: 875.25,
      imagen: 'src/assets/imagenes/anillo-zafiro.jpg' // Ruta de ejemplo
    }
  ];

  return (
    <div className="anillos-container">
      <h1 className="anillos-title">Anillos</h1>
      <div className="anillos-grid">
        {productos.map(producto => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h2 className="producto-nombre">{producto.nombre}</h2>
            <p className="producto-descripcion">{producto.descripcion}</p>
            <p className="producto-precio">${producto.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anillos;
