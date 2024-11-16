// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchProductos = async () => {
  try {
    const response = await axios.get(`${API_URL}/productos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching productos:', error);
    throw error;
  }
};

export const fetchProductoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/productos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching producto by id:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Devuelve los datos del usuario o un token
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};

// Función para obtener el perfil del usuario
export const fetchUserProfile = async (token) => {
  if (!token) {
    throw new Error('Token no proporcionado');
  }

  try {
    const response = await axios.get(`${API_URL}/usuarios/perfil`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Devuelve solo los datos necesarios
  } catch (error) {
    console.error('Error fetching user profile:', error.response ? error.response.data : error.message);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};

export const buscarProductos = async (nombre, minPrecio, maxPrecio) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/productos`, {
      params: { nombre, minPrecio, maxPrecio }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error desconocido');
  }
};

// Obtener productos del carrito de un usuario
export const getCarrito = async (userId) => {
  try {
    const response = await axios.get(`/api/carritos/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    throw error;
  }
};

// Agregar producto al carrito

export const addToCarrito = async (productId, cantidad) => {
  const token = localStorage.getItem('token'); // Obtenemos el token del localStorage
  console.log('Token recuperado del localStorage:', token);

  try {
    console.log('Datos enviados:', { productId, cantidad }); // Verificamos los datos del body
    const response = await axios.post(
      'http://localhost:3000/api/carritos/producto',
      { productId, cantidad },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Cabecera de autorización
          'Content-Type': 'application/json', // Tipo de contenido
        },
      }
    );
    console.log('Respuesta del servidor:', response.data); // Verificamos la respuesta
  } catch (error) {
    console.error('Error al agregar al carrito:', error.response?.data || error.message); // Error detallado
  }
};

// Eliminar producto del carrito
export const removeFromCarrito = async (userId, productoId) => {
  try {
    const response = await axios.delete(`/api/carritos/${userId}/${productoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar del carrito:", error);
    throw error;
  }
};