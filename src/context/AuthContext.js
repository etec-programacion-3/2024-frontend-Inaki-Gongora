// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Función para verificar si el token es válido
  const isTokenValid = (jwtToken) => {
    if (!jwtToken) return false;

    try {
      const { exp } = JSON.parse(atob(jwtToken.split('.')[1])); // Decodifica el payload del JWT.
      const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos.
      return exp > currentTime; // Valida si el token no ha expirado.
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return false;
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
      setIsLoggedIn(isTokenValid(storedToken));
    };

    // Validar token en el montaje inicial
    handleStorageChange();

    // Listener para cambios en localStorage
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, isTokenValid, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);