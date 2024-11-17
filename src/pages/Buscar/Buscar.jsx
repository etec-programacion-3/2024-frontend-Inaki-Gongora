// src/pages/Buscar.jsx
import React, { useState } from 'react';
import { buscarProductos } from '../../services/api';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useNavigate } from 'react-router-dom';
import './Buscar.css';

const Buscar = () => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioRango, setPrecioRango] = useState([0, 5000]);
  const [resultados, setResultados] = useState([]);
  const [haBuscado, setHaBuscado] = useState(false);
  const navigate = useNavigate();

  const handleBuscar = async () => {
    setResultados([]);
    setHaBuscado(false);

    try {
      const resultadosBusqueda = await buscarProductos(nombreProducto, precioRango[0], precioRango[1]);
      setResultados(resultadosBusqueda);
      setHaBuscado(true);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  const handleSliderChange = (value) => {
    setPrecioRango(value);
  };

  const handleProductoClick = (id) => {
    navigate(`/producto/${id}`);
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
          trackStyle={[{ backgroundColor: 'black' }]}
          handleStyle={[
            { borderColor: 'white', backgroundColor: 'black' },
            { borderColor: 'white', backgroundColor: 'black' },
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
            <div key={producto.id} className="producto-resultado" onClick={() => handleProductoClick(producto.id)}>
              <div className="producto-info">
                <h2>{producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
                <p>{producto.descripcion}</p>
              </div>
              {producto.imagen && (
                <img
                  className="producto-imagen"
                  src={`http://localhost:3001${producto.imagen}`}
                  alt={producto.nombre}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Buscar;