import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carrito.css';
import bolsaDeCompras from '../../assets/bolsas-de-compra.png';
import tarjetaIcono from '../../assets/tarjeta-icono.png';
import envioIcono from '../../assets/camion-icono.png';
import cajaDevolucion from '../../assets/caja-de-devolucion.png';
import imagenPredeterminada from "../../assets/foto-producto2.png";

const Carrito = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [agradecimientoVisible, setAgradecimientoVisible] = useState(false); // Estado para el popup
  const [total, setTotal] = useState(0); // Estado para el total del carrito

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

  useEffect(() => {
    // Calcula el total cada vez que cambian los productos
    const nuevoTotal = productos.reduce(
      (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
      0
    );
    setTotal(nuevoTotal);
  }, [productos]);

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

      setProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== idRelacion));
    } catch (err) {
      console.error('Error al eliminar producto del carrito', err);
    }
  };

  const finalizarCompra = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Usuario no autenticado. Por favor, inicie sesión.');
        return;
      }

      // Vaciar el carrito en el servidor
      await axios.delete('http://localhost:3000/api/carritos/vaciar', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Vaciar carrito localmente
      setProductos([]); // Limpia la lista de productos
      setAgradecimientoVisible(true); // Muestra el popup de agradecimiento
    } catch (err) {
      console.error('Error al finalizar la compra:', err);
      alert('Hubo un problema al procesar la compra. Por favor, inténtelo nuevamente.');
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
            <h1 className='producto-en-tu-carrito'>Productos en tu carrito</h1>
            <div className="carrito">
            {productos.map((producto) => (
              <div key={producto.producto_id} className="producto">
                <img
                  src={producto.imagen || imagenPredeterminada} // Asignar imagen o predeterminada
                  alt={producto.nombre}
                  onError={(e) => {
                    console.warn(`No se pudo cargar la imagen para el producto con ID ${producto.producto_id}`);
                    e.target.src = imagenPredeterminada;
                  }} // Log si hay error al cargar la imagen
                />
                <h3 className='titulo-producto-carrito'>{producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
                <button className='eliminar-producto' onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </button>
              </div>
            ))}
            </div>
          </>
        )}
      </div>
      <div>
        <ResumenCompra total={total} mostrarModal={mostrarModal} finalizarCompra={finalizarCompra} />
      </div>

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

      {agradecimientoVisible && (
        <div id="agradecimiento" className="agradecimiento-popup">
          <div className="agradecimiento-contenido">
            <span className="cerrar" onClick={() => setAgradecimientoVisible(false)}>&times;</span>
            <h1>¡Gracias por comprar en Zephyr!</h1>
            <p>Tu compra ha sido procesada con éxito.</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ResumenCompra = ({ total, mostrarModal, finalizarCompra }) => (
  <div className="resumen-container">
    <div className="resumen-compra">
      <h1>Resumen de compra</h1>
      <p>Total: ${total.toFixed(2)}</p>
      <button className='finalizar-compra' onClick={finalizarCompra}>
        Finalizar compra
      </button>
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
