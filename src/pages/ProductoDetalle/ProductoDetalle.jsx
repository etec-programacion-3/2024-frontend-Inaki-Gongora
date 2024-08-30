// src/pages/ProductoDetalle/ProductoDetalle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductoDetalle = () => {
  const { nombreProducto } = useParams();

  // Aquí podrías buscar la información del producto basándote en el nombreProducto
  // Por ejemplo, usando una llamada a una API o consultando un array de productos

  return (
    <div style={{ padding: '20px' }}>
      <h1>Detalles del Producto: {nombreProducto}</h1>
      {/* Renderiza la información del producto aquí */}
      <p>Aquí irán los detalles del producto con el nombre: {nombreProducto}</p>
    </div>
  );
};

export default ProductoDetalle;