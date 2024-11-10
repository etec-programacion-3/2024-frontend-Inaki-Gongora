// src/pages/Anillos/Anillos.jsx
import React from 'react';
import './Aros.css';
import { AiOutlineHeart } from 'react-icons/ai';
import fotito from "../../assets/foto-producto2.png";
import fondoimagen from "../../assets/foto-producto2.png";
import loloolo from "../../assets/fondo-landing-copia.png"; // Ruta de ejemplo

const Aros = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Anillo de cóctel Luna, Blanco, Baño de rodio',
      precioOriginal: 425.0,
      precioDescuento: 340.0,
      descuento: 20,
      cuotas: 18888,
      imagen: fotito,
    },
    {
      id: 2,
      nombre: 'Anillo de cóctel Constella Talla princesa, Baño de rodio',
      precioOriginal: 289.0,
      precioDescuento: 231.2,
      descuento: 20,
      cuotas: 12844,
      imagen: fotito,
    },
    {
      id: 3,
      nombre: 'Anillo Vittore Wide, Blanco, Baño de rodio',
      precioOriginal: 379.0,
      precioDescuento: 303.2,
      descuento: 20,
      cuotas: 16844,
      imagen: fotito,
    },
    {
      id: 4,
      nombre: 'Anillo de compromiso, Oro blanco, Diamante de 1 quilate',
      precioOriginal: 1200.0,
      precioDescuento: 960.0,
      descuento: 20,
      cuotas: 53333,
      imagen: fotito,
    },
    {
      id: 5,
      nombre: 'Anillo Hyperbola, Símbolo del infinito, Baño de rodio',
      precioOriginal: 310.0,
      precioDescuento: 248.0,
      descuento: 20,
      cuotas: 13778,
      imagen: fotito,
    },
    {
      id: 6,
      nombre: 'Anillo Constella, Pavé, Baño tono oro rosa',
      precioOriginal: 320.0,
      precioDescuento: 256.0,
      descuento: 20,
      cuotas: 14222,
      imagen: fotito,
    },
    {
      id: 7,
      nombre: 'Anillo Trilogy, Tres piedras, Baño de rodio',
      precioOriginal: 410.0,
      precioDescuento: 328.0,
      descuento: 20,
      cuotas: 18222,
      imagen: fotito,
    },
    {
      id: 8,
      nombre: 'Anillo Victoria, Diseño floral, Baño de oro',
      precioOriginal: 499.0,
      precioDescuento: 399.2,
      descuento: 20,
      cuotas: 22178,
      imagen: fotito,
    },
    {
      id: 9,
      nombre: 'Anillo solitario con zafiro, Baño de rodio',
      precioOriginal: 600.0,
      precioDescuento: 480.0,
      descuento: 20,
      cuotas: 26666,
      imagen: fotito,
    },
    {
      id: 10,
      nombre: 'Anillo Twist, Dos tonos, Baño de rodio y oro rosa',
      precioOriginal: 285.0,
      precioDescuento: 228.0,
      descuento: 20,
      cuotas: 12667,
      imagen: fotito,
    },
    {
      id: 11,
      nombre: 'Anillo Celestial, Inspirado en la luna, Baño de oro',
      precioOriginal: 320.0,
      precioDescuento: 256.0,
      descuento: 20,
      cuotas: 14222,
      imagen: fotito,
    },
    {
      id: 12,
      nombre: 'Anillo Eternity, Diamantes de laboratorio, Baño de platino',
      precioOriginal: 890.0,
      precioDescuento: 712.0,
      descuento: 20,
      cuotas: 39556,
      imagen: fotito,
    },
  ];

  return (
    <div className="anillos-container">
      <header className="anillos-header">
        <h1 className="anillos-title">Aros colgantes</h1>
        <h3 className="anillos-subtitle">
        Los aros colgantes de Zephyr son elementos elegantes y sofisticados, con cristales que llevan todo el encanto y la magia de la marca a los cuatro rincones del mundo.
        </h3>
      </header>
      <div className="anillos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="imagenloca" />
            <h2 className="producto-nombre">{producto.nombre}</h2>
            <p className="producto-precio-descuento">${producto.precioDescuento.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aros;
