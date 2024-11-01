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

// Función para crear un nuevo usuario
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};