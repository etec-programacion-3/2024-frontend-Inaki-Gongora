// src/pages/ProductoDetalle/ProductoDetalle.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductoById } from '../../services/api';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { id } = useParams(); // Cambiado a 'id'
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = async () => {
      try {
        const data = await fetchProductoById(id); // Usando el id del producto
        setProducto(data);
      } catch (error) {
        console.error('Error loading producto:', error);
      }
    };

    getProducto();
  }, [id]);

  if (!producto) return <p>Loading...</p>;

  return (
    <div className="producto-detalle-container">
      <h1>{producto.nombre}</h1>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      {/* Agrega más detalles si están disponibles, como categoría, stock, etc. */}
    </div>
  );
};

export default ProductoDetalle;
