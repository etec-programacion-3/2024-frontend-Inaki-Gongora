// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // URL del backend

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