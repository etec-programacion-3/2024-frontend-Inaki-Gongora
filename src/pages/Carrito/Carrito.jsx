import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carrito.css'; // Asegúrate de adaptar tus estilos aquí

const Carrito = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true);   // Estado para manejar el loading
  const [error, setError] = useState(null);       // Estado para manejar errores

  useEffect(() => {
    const obtenerCarrito = async () => {
      try {
        // Recuperar el token desde localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Usuario no autenticado. Falta el token.');
        }

        // Hacer una solicitud GET al backend con el token
        const response = await axios.get('http://localhost:3000/api/carritos/carrito', {
          headers: {
            Authorization: `Bearer ${token}`, // Incluir el token en los encabezados
          },
        });

        setProductos(response.data); // Guardar los productos en el estado
        setLoading(false);           // Cambiar el estado de loading
      } catch (err) {
        console.error('Error:', err);
        setError('Error al obtener el carrito');
        setLoading(false);
      }
    };

    obtenerCarrito(); // Llamar a la función cuando el componente se monte
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="carrito-container">
      <h1>Tu Carrito</h1>
      {productos.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <div className="resultados-busqueda">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-resultado">
              <div className="producto-info">
                <h2>{producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
              </div>
              {producto.imagen ? (
                <img
                  className="producto-imagen"
                  src={producto.imagen.startsWith('http') ? producto.imagen : `http://localhost:3001${producto.imagen}`}
                  alt={producto.nombre}
                />
              ) : (
                <img
                  className="producto-imagen"
                  src="ruta-a-imagen-por-defecto.png"
                  alt="Producto por defecto"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrito;