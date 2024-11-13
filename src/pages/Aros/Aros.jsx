import React, { useEffect, useState } from 'react';
import './Aros.css';
import { AiOutlineHeart } from 'react-icons/ai';
import fotito from "../../assets/foto-producto2.png"; // Imagen predeterminada en caso de no tener imagen

import { fetchProductos } from '../../services/api'; // Importa la función para obtener productos

const Aros = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const data = await fetchProductos();
        setProductos(data); // Guardamos los productos en el estado
      } catch (error) {
        setError('Error al obtener los productos.');
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="anillos-container">
      <header className="aros-header">
        <h1 className="anillos-title">Aros colgantes</h1>
        <h3 className="anillos-subtitle">
          Los aros colgantes de Zephyr son elementos elegantes y sofisticados, con cristales que llevan todo el encanto y la magia de la marca a los cuatro rincones del mundo.
        </h3>
      </header>
      <div className="anillos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen || fotito} alt={producto.nombre} className="imagenloca" />
            <h2 className="producto-nombre">{producto.nombre}</h2>
            <p className="producto-precio-descuento">
              {
                // Verifica si el precio es un número válido antes de aplicar toFixed
                typeof producto.precio === "number" && !isNaN(producto.precio) 
                ? `$${producto.precio.toFixed(2)}`
                : "Precio no disponible"
              }
            </p>
            <p className="producto-cuotas">Cuotas: {producto.cuotas}</p>
            <AiOutlineHeart className="icono-favorito" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aros