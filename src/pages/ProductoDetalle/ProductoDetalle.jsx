import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductoById } from '../../services/api';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = async () => {
      try {
        const data = await fetchProductoById(id);
        console.log('Producto:', data); // Verifica el contenido de data
        setProducto(data);
      } catch (error) {
        console.error('Error loading producto:', error);
      }
    };
  
    getProducto();
  }, [id]);

  // useEffect para igualar la altura de .contenedor con .info-producto
  useEffect(() => {
    if (producto) {
      const infoProducto = document.querySelector('.info-producto');
      const contenedor = document.querySelector('.contenedor');
      
      // Establecer la altura de .contenedor igual a la de .info-producto
      if (infoProducto && contenedor) {
        contenedor.style.height = `${infoProducto.offsetHeight}px`;
      }
    }
  }, [producto]);

  if (!producto) return <p>Loading...</p>;

  // Verificar que producto.imagenUrl exista
  const imagenUrlCompleta = producto.imagen ? `http://localhost:3001${producto.imagen}` : '/images/imagen-predeterminada.jpg';

  return (
    <div className="cuerpo">
      <div className="contenedor-grande">
        <div className="foto-producto">
          <div className="contenedor">
            <img className="imagen-producto" src={imagenUrlCompleta} alt={producto.nombre} />
          </div>
        </div>

        <div className="info-producto">
          <h1>{producto.nombre}</h1>
          <h2>${producto.precio}</h2>
          <h4 className="pago">{producto.disponible ? 'Disponible' : 'No disponible'}</h4>
          <h3>Género: {producto.genero}</h3>

          <h4>Talle:</h4>
          <div className="talles">
            {producto.talles?.map((talle, index) => (
              <div key={index} className="div-talles">
                <h3>{talle}</h3>
              </div>
            ))}
          </div>

          <h4>Color:</h4>
          <div className="talles">
            <h3>{producto.color}</h3>
          </div>

          <h4 className="guia">Guía de talles</h4>

          <div className="compra-container">
            <button className="compra">Comprar</button>
          </div>

          <h1 className="zapas-descrip-titulo">Descripción</h1>
          <h3 className="info-zapatillas">{producto.descripcion}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;