// src/pages/ProductoDetalle/ProductoDetalle.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductoById } from '../../services/api';

const ProductoDetalle = () => {
  const { nombreProducto } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = async () => {
      try {
        const data = await fetchProductoById(nombreProducto);
        setProducto(data);
      } catch (error) {
        console.error('Error loading producto:', error);
      }
    };

    getProducto();
  }, [nombreProducto]);

  if (!producto) return <p>Loading...</p>;

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <p>Nombre: {producto.nombre}</p>
      <p>Descripción: {producto.descripcion}</p>
      {/* Agrega más detalles aquí */}
    </div>
  );
};

export default ProductoDetalle;