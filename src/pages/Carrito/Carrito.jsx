// Carrito.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carrito.css'; // Asegúrate de adaptar tus estilos aquí
import bolsaDeCompras from '../../assets/bolsas-de-compra.png';
import tarjetaIcono from '../../assets/tarjeta-icono.png';
import envioIcono from '../../assets/camion-icono.png';
import cajaDevolucion from '../../assets/caja-de-devolucion.png';

const Carrito = () => {
  const [productos, setProductos] = useState([]); // Estado para los productos del carrito
  const [loading, setLoading] = useState(true);   // Estado para manejar el loading
  const [error, setError] = useState(null);       // Estado para manejar errores
  const [modalVisible, setModalVisible] = useState(false); // Para el modal de pagos

  // Función para obtener los productos del carrito desde el backend
  useEffect(() => {
    const obtenerCarrito = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Usuario no autenticado. Falta el token.');
        }

        const response = await axios.get('http://localhost:3000/api/carritos/carrito', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProductos(response.data); // Guardamos los productos en el estado
        setLoading(false);           // Cambiar el estado de loading
      } catch (err) {
        console.error('Error al obtener el carrito', err);
        setError('Error al obtener el carrito');
        setLoading(false);
      }
    };

    obtenerCarrito();
  }, []);

  const eliminarProducto = async (productoId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Usuario no autenticado. Falta el token.');
      }
  
      // Ahora pasamos el productoId directamente en la URL
      const response = await axios.delete(`http://localhost:3000/api/carritos/producto/${productoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Respuesta del backend:', response.data);  // Log para debug
  
      // Si el producto se eliminó correctamente, actualizamos el carrito
      alert(response.data.message); // Mostrar mensaje de éxito
  
      // Actualizamos la lista de productos obteniéndola nuevamente desde el backend
      const carritoResponse = await axios.get('http://localhost:3000/api/carritos/carrito', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Productos actualizados del carrito:', carritoResponse.data);  // Log para debug
  
      setProductos(carritoResponse.data); // Actualizamos los productos con los datos más recientes
    } catch (err) {
      console.error('Error al eliminar el producto del carrito:', err);
      setError('Error al eliminar el producto del carrito');
    }
  };
  const mostrarModal = () => {
    setModalVisible(true);
  };

  const ocultarModal = () => {
    setModalVisible(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="carrito-container">
        {productos.length === 0 ? (
          <>
            <img src={bolsaDeCompras} alt="Imagen de carrito vacío" className="carrito-imagen" />
            <h1>¡Empieza tu carrito de compras!</h1>
            <a className="a-login" href="/">
              <button type="submit" className="login-button">Descubrir productos</button>
            </a>
          </>
        ) : (
          <>
            <h1>Productos en tu carrito</h1>
            <div className="productos-carrito">
              {productos.map((producto) => (
                <div key={producto.id} className="producto-card">
                  <h3>{producto.nombre}</h3>
                  <p>Precio: ${producto.precio}</p>
                  <p>Cantidad: {producto.cantidad}</p>
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
                  <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <ResumenCompra mostrarModal={mostrarModal} />
      </div>

      {/* Modal de Pagos */}
      {modalVisible && (
        <div id="modal" className="modal">
          <div className="modal-contenido">
            <span className="cerrar" onClick={ocultarModal}>&times;</span>
            <h1 className="modal-texto">Pagos</h1>
            <p className="modal-texto">
              Se aceptan pagos con tarjeta de crédito, tarjeta de débito o PayPal con una dirección de facturación válida en la República Argentina.
            </p>
            <p className="modal-texto">
              Al realizar un pedido, su dirección de facturación debe de coincidir con la dirección de la tarjeta que utilizará para el pago, de lo contrario no se podrá procesar la orden.
            </p>
            <p className="modal-texto">
              Todas las transacciones son seguras. El sitio web de Zephyr cuenta con un sistema de codificación SSL para proteger los datos personales y de pago.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const ResumenCompra = ({ mostrarModal }) => (
  <div className="resumen-container">
    <div className="resumen-compra">
      <h1>Resumen de compra</h1>
      <p className="aviso-importes">Aquí verás los importes de tu compra una vez que agregues productos</p>
    </div>
    <div className="botones-detalles">
      <hr />
      <button className="boton-detalles" id="botonpagos" onClick={mostrarModal}>
        <img className="img-detalles" src={tarjetaIcono} alt="Tarjeta-imagen" />
        <h2>Pagos</h2>
      </button>
      <hr />
      <button className="boton-detalles">
        <img className="img-detalles" src={envioIcono} alt="envíos-imagen" />
        <h2>Envíos</h2>
      </button>
      <hr />
      <button className="boton-detalles">
        <img className="img-detalles" src={cajaDevolucion} alt="devoluciones-imagen" />
        <h2>Devoluciones</h2>
      </button>
    </div>
  </div>
);

export default Carrito;