// ProductoDetalle.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Cambié useHistory por useNavigate
import { fetchProductoById } from '../../services/api';
import { addToCarrito } from '../../services/api'; // Importamos la función de agregar al carrito
import { FaArrowAltCircleUp } from 'react-icons/fa'; // Icono de flecha
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [mostrarGuia, setMostrarGuia] = useState(false);
  const navigate = useNavigate();  // Usamos useNavigate en lugar de useHistory

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
    const token = localStorage.getItem('token');  // Obtener el token del localStorage
    if (!token) {
      alert('Por favor, inicia sesión para comprar.');
      navigate('/login');  // Usamos navigate en lugar de history.push
      return;
    }
  
    try {
      await addToCarrito(id, 1, token);  // Asegúrate de pasar el token aquí
      alert('Producto agregado al carrito.');
    } catch (error) {
      alert('Hubo un problema al agregar el producto al carrito.');
      console.error('Error al agregar al carrito:', error);
    }
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
          <h1 className='titulo-producto'>{producto.nombre}</h1>
          <h2 className='precio-producto'>${producto.precio}</h2>
          <h4 className="pago">{producto.disponibilidad ? 'Disponible' : 'No disponible'}</h4>
          <hr></hr>
          <div className="detalles-linea">
            <span><strong>Talla:</strong> {producto.talla || 'No disponible'}</span>
            <br></br>
            <br></br>
            <span><strong>Color:</strong> {producto.color || 'No disponible'}</span>
          </div>

          <h4 className="guia" onClick={toggleGuia}>
            Guía de talles
            <FaArrowAltCircleUp style={{ marginLeft: '8px', transform: 'rotate(45deg)', position: 'relative', top: '2px' }} />
          </h4>

          {mostrarGuia && (
            <div className="popup-guia">
              <div className="popup-contenido">
                <h2 className='guiatalles'>Guía de Talles</h2>
                <p className='ppopup'>Utilice la siguiente tabla para elegir su talla.</p>
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
                    <tr>
                      <td>Mexico</td>
                      <td>5</td>
                      <td>7</td>
                      <td>8</td>
                      <td>10 1/2</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>US / CA</td>
                      <td>4¾ - 5/XS</td>
                      <td>6/S</td>
                      <td>7/M</td>
                      <td>8/L</td>
                      <td>9/XL</td>
                    </tr>
                    <tr>
                      <td>Japón</td>
                      <td>9</td>
                      <td>10 - 12</td>
                      <td>13 - 15</td>
                      <td>16 - 18</td>
                      <td>19 - 20</td>
                    </tr>
                    <tr>
                      <td>UK</td>
                      <td>J½</td>
                      <td>L</td>
                      <td>N</td>
                      <td>P / Q</td>
                      <td>R</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={toggleGuia} className="cerrar-popup">Cerrar</button>
              </div>
            </div>
          )}

          <div className="compra-container">
            <button className="compra" onClick={handleComprar}>Comprar</button>
          </div>

          <h1 className="zapas-descrip-titulo">Descripción</h1>
          <h3 className="info-zapatillas">{producto.descripcion || 'No hay descripción disponible.'}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;