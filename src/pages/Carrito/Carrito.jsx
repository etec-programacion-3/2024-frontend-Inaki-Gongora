import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de que Axios esté instalado
import './Carrito.css'; // Asegúrate de adaptar tus estilos aquí
import bolsaDeCompras from '../../assets/bolsas-de-compra.png';
import tarjetaIcono from '../../assets/tarjeta-icono.png';
import envioIcono from '../../assets/camion-icono.png';
import cajaDevolucion from '../../assets/caja-de-devolucion.png';

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
    <div>
      <h1>Tu Carrito</h1>
      {productos.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} style={{ width: '50px' }} />
              <p>{producto.nombre}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;