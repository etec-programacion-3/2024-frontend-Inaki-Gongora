import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para redirigir
import './Anillos.css';
import fotito from "../../assets/foto-producto2.png"; // Imagen predeterminada en caso de no tener imagen

import { fetchProductos } from '../../services/api'; // Importa la función para obtener productos

const Anillos = () => {
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
      <header className="anillos-header">
        <h1 className="anillos-title">Anillos</h1>
        <h3 className="anillos-subtitle">
          Los anillos de Zephyr son piezas únicas, diseñadas para resaltar la elegancia y el estilo en cada momento.
        </h3>
      </header>
      <div className="anillos-grid">
        {productos
          .filter((producto) => producto.tipo === 'anillo') // Filtramos los productos que son de tipo 'anillo'
          .map((producto) => (
            <Link to={`/producto/${producto.id}`} className="producto-card" key={producto.id}> {/* Link que redirige al detalle del producto */}
              <img src={producto.imagen || fotito} alt={producto.nombre} className="imagenloca" />
              <h2 className="producto-nombres">{producto.nombre}</h2>
              <p className="producto-precio">
                {
                  // Aseguramos que el precio es un número y es válido
                  !isNaN(producto.precio) && producto.precio !== null
                    ? `$${parseFloat(producto.precio).toFixed(2)}`
                    : "Precio no disponible"
                }
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Anillos;