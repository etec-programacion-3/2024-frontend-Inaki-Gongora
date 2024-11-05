// src/pages/Buscar.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Buscar.css';

const API_URL = 'http://localhost:3000/api/productos'; // Asegúrate de ajustar esta URL según tu backend

const Buscar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Resetea el mensaje de error

    try {
      const response = await axios.get(`${API_URL}?q=${query}`);
      setResults(response.data); // Asigna los resultados de búsqueda
    } catch (err) {
      setError('Error al realizar la búsqueda. Intenta nuevamente.');
    }
  };

  return (
    <div className="buscar-container">
      <h1>Buscar Productos</h1>
      <form onSubmit={handleSearch} className="buscar-form">
        <input
          type="text"
          placeholder="Nombre del producto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button className='botonBuscar' type="submit">Buscar</button>
      </form>

      {error && <p className="buscar-error">{error}</p>}
      
      <div className="resultados-busqueda">
        {results.length > 0 ? (
          results.map((producto) => (
            <div key={producto.id} className="producto-card">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
          ))
        ) : (
          query && <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default Buscar;