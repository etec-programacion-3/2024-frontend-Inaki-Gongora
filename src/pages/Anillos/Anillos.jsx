// src/pages/Anillos/Anillos.jsx
import React, { useEffect, useState } from 'react';
import { fetchProductos } from '../../services/api';

const Anillos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const data = await fetchProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error loading productos:', error);
      }
    };

    getProductos();
  }, []);

  return (
    <div>
      <h1>Anillos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Anillos;