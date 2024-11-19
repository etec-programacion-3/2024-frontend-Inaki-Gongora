import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para redirigir
import './Aros.css';
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
        // Filtra los productos para que solo se muestren los de tipo "aro"
        const productosAros = data.filter(producto => producto.tipo === 'aro');
        setProductos(productosAros); // Guardamos los productos filtrados en el estado
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
    <div className="aros-container">
      <header className="aros-header">
        <h1 className="aros-title">Aros colgantes</h1>
        <h3 className="aros-subtitle">
          Los aros colgantes de Zephyr son elementos elegantes y sofisticados, con cristales que llevan todo el encanto y la magia de la marca a los cuatro rincones del mundo.
        </h3>
      </header>
      <div className="aros-grid">
        {productos.map((producto) => (
          <Link to={`/producto/${producto.id}`} className="producto-card" key={producto.id}> {/* Link que redirige al detalle del producto */}
            <img src={producto.imagen || fotito} alt={producto.nombre} className="imagenloca" />
            <h2 className="producto-nombre">{producto.nombre}</h2>
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

export default Aros;