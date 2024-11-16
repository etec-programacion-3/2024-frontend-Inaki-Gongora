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
  
        console.log("Productos obtenidos del backend:", response.data);  // Verifica qué datos estás recibiendo
        setProductos(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener el carrito', err);
        setError('Error al obtener el carrito');
        setLoading(false);
      }
    };
  
    obtenerCarrito();
  }, []);

  const eliminarProducto = async (idRelacion) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Usuario no autenticado. Falta el token.');
      }
  
      await axios.delete(`http://localhost:3000/api/carritos/eliminar/${idRelacion}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Después de eliminar, puedes actualizar el estado para reflejar los cambios en el carrito
      setProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== idRelacion));
    } catch (err) {
      console.error('Error al eliminar producto del carrito', err);
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
            <div className="carrito">
            {productos.map((producto) => (
              <div key={producto.id} className="producto">
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <button onClick={() => {
                  console.log("Producto a eliminar (ID):", producto.id);  // Verifica el ID en el clic
                  eliminarProducto(producto.id);
                }}>
                  Eliminar
                </button>
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