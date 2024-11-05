// src/pages/Buscar.jsx
import React, { useState } from 'react';
import { buscarProductos } from '../../services/api';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Buscar.css';

const Buscar = () => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioRango, setPrecioRango] = useState([0, 5000]);
  const [resultados, setResultados] = useState([]);
  const [haBuscado, setHaBuscado] = useState(false);

  const handleBuscar = async () => {
    setHaBuscado(true); // Indicar que se realizó una búsqueda
    try {
      const resultadosBusqueda = await buscarProductos(nombreProducto, precioRango[0], precioRango[1]);
      setResultados(resultadosBusqueda);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  const handleSliderChange = (value) => {
    setPrecioRango(value);
  };

  return (
    <div className="buscar-container">
      <h1>Buscar Productos</h1>
      <div className="buscar-form">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
        />
      </div>
      
      <div className="filtro-precio">
        <label>Rango de precios:</label>
        <Slider
          range
          min={0}
          max={5000}
          value={precioRango}
          onChange={handleSliderChange}
          allowCross={false}
          trackStyle={[{ backgroundColor: '#007acc' }]}
          handleStyle={[
            { borderColor: '#007acc', backgroundColor: '#007acc' },
            { borderColor: '#007acc', backgroundColor: '#007acc' },
          ]}
        />
        <div className="precio-valores">
          <span>Min: ${precioRango[0]}</span>
          <span>Max: ${precioRango[1]}</span>
        </div>
      </div>

      <button className="buscar-button" onClick={handleBuscar}>Buscar</button>
      
      <div className="resultados-busqueda">
        {haBuscado && resultados.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          resultados.map((producto) => (
            <div key={producto.id} className="producto-card">
              <h2>{producto.nombre}</h2>
              <p>Precio: ${producto.precio}</p>
              <p>{producto.descripcion}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Buscar;