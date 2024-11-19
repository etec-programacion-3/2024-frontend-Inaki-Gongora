import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductoById } from '../../services/api';
import { addToCarrito } from '../../services/api'; // Importamos la función de agregar al carrito
import { FaArrowAltCircleUp } from 'react-icons/fa'; // Icono de flecha
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [mostrarGuia, setMostrarGuia] = useState(false);
  const [mostrarPopup, setMostrarPopup] = useState(false); // Estado para controlar el popup
  const [mensajePopup, setMensajePopup] = useState(''); // Estado para el mensaje del popup
  const navigate = useNavigate();

  useEffect(() => {
    const getProducto = async () => {
      try {
        const data = await fetchProductoById(id);
        setProducto(data);
      } catch (error) {
        console.error('Error loading producto:', error);
      }
    };

    getProducto();
  }, [id]);

  const imagenUrlCompleta = producto ? `http://localhost:3001${producto.imagen}` : '/images/imagen-predeterminada.jpg';

  const toggleGuia = () => {
    setMostrarGuia(!mostrarGuia);
  };

  const handleComprar = async () => {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    if (!token) {
      setMensajePopup('Por favor, inicia sesión para comprar.');
      setMostrarPopup(true);
      navigate('/login');
      return;
    }

    try {
      await addToCarrito(id, 1, token);
      setMensajePopup('Producto agregado al carrito.');
      setMostrarPopup(true);
    } catch (error) {
      setMensajePopup('Hubo un problema al agregar el producto al carrito.');
      setMostrarPopup(true);
      console.error('Error al agregar al carrito:', error);
    }
  };

  const cerrarPopup = () => {
    setMostrarPopup(false);
  };

  if (!producto) return <p>Loading...</p>;

  return (
    <div className="cuerpo">
      <div className="contenedor-grande">
        <div className="foto-producto">
          <div className="contenedor">
            <img className="imagen-producto" src={imagenUrlCompleta} alt={producto.nombre} />
          </div>
        </div>

        <div className="info-producto">
          <h1 className="titulo-producto">{producto.nombre}</h1>
          <h2 className="precio-producto">${producto.precio}</h2>
          <h4 className="pago">{producto.disponibilidad ? 'Disponible' : 'No disponible'}</h4>
          <hr />
          <div className="detalles-linea">
            <span className="talle">
              <strong>Talla:</strong> {producto.talla || 'No disponible'}
            </span>
            <br />
            <br />
            <span className="color">
              <strong>Color:</strong> {producto.color || 'No disponible'}
            </span>
          </div>

          <h4 className="guia" onClick={toggleGuia}>
            Guía de talles
            <FaArrowAltCircleUp style={{ marginLeft: '8px', transform: 'rotate(45deg)', position: 'relative', top: '2px' }} />
          </h4>

          {mostrarGuia && (
            <div className="popup-guia">
              <div className="popup-contenido">
                <h2 className="guiatalles">Guía de Talles</h2>
                <p className="ppopup">Utilice la siguiente tabla para elegir su talla.</p>
                <table>
                  <thead>
                    <tr>
                      <th>Argentina</th>
                      <th>4-5</th>
                      <th>6-7</th>
                      <th>8-9</th>
                      <th>10</th>
                      <th>11-12</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Diámetro (mm)</td>
                      <td>15mm</td>
                      <td>16.2mm</td>
                      <td>18.1mm</td>
                      <td>19.4mm</td>
                      <td>21.5mm</td>
                    </tr>
                    <tr>
                      <td>Brasil</td>
                      <td>10 - 11</td>
                      <td>12 - 13</td>
                      <td>14</td>
                      <td>17</td>
                      <td>20</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={toggleGuia} className="cerrar-popup">
                  Cerrar
                </button>
              </div>
            </div>
          )}

          <div className="compra-container">
            <button className="compra" onClick={handleComprar}>
              Agregar al carrito
            </button>
          </div>

          <h1 className="zapas-descrip-titulo">Descripción</h1>
          <h3 className="info-zapatillas">{producto.descripcion || 'No hay descripción disponible.'}</h3>
        </div>
      </div>

      {/* Popup de notificación con fondo oscuro */}
      {mostrarPopup && (
        <>
          <div className="overlay" onClick={cerrarPopup}></div> {/* Fondo oscuro */}
          <div className="popup-notificacion">
            <div className="popup-contenido">
              <p>{mensajePopup}</p>
              <button className="cerrar-popup" onClick={cerrarPopup}>
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductoDetalle;
