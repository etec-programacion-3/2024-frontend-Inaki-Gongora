import React, { useState } from 'react';
import './Carrito.css'; // Asegúrate de adaptar tus estilos aquí
import bolsaDeCompras from '../../assets/bolsas-de-compra.png';
import tarjetaIcono from '../../assets/tarjeta-icono.png';
import envioIcono from '../../assets/camion-icono.png';
import cajaDevolucion from '../../assets/caja-de-devolucion.png';



const Carrito = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const mostrarModal = () => {
    setModalVisible(true);
  };

  const ocultarModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container">
      <div className="carrito-container">
        <img src={bolsaDeCompras} alt="Imagen de carrito vacío" className="carrito-imagen" />
        <h1>¡Empieza tu carrito de compras!</h1>
        <a className="a-login" href="/productos">
          <button type="submit" className="login-button">Descubrir productos</button>
        </a>
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
        <img className="img-detalles" src= {tarjetaIcono} alt="Tarjeta-imagen" />
        <h2>Pagos</h2>
      </button>
      <hr />
      <button className="boton-detalles">
        <img className="img-detalles" src={envioIcono} alt="envíos-imagen" />
        <h2>Envíos</h2>
      </button>
      <hr />
      <button className="boton-detalles">
        <img className="img-detalles" src= {cajaDevolucion} alt="devoluciones-imagen" />
        <h2>Devoluciones</h2>
      </button>
    </div>
  </div>
);

export default Carrito;
