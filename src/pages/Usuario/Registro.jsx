// src/components/Registro.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/api'; // Importamos la función de creación de usuario
import './Registro.css';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [contraseña, setContraseña] = useState(''); // Cambié de password a contraseña
  const [confirmarContraseña, setConfirmarContraseña] = useState(''); // Cambié de confirmPassword a confirmarContraseña
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    link.integrity = 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';
    document.head.appendChild(link);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (contraseña !== confirmarContraseña) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Verificar si el email ya está en uso
  try {
    const response = await fetch(`http://localhost:3000/api/usuarios/check-email?email=${email}`);
    if (!response.ok) {
      const data = await response.json();
      setError(data.message); // Mostrar mensaje de error si el email ya está en uso
      return;
    }
  } catch (error) {
    setError('Error al verificar el email. Intenta nuevamente.');
    return;
  }

    const userData = {
      nombre,
      email,
      telefono,
      direccion,
      contraseña, // Cambié de password a contraseña
      rol: 'usuario', // Agregamos el rol con un valor fijo
    };

    try {
      const response = await createUser(userData);
      console.log('Usuario creado:', response);
      navigate('/Login'); // Redirigir al inicio de sesión
    } catch (error) {
      setError('Error al crear el usuario. Intenta nuevamente.');
      console.error('Error creando usuario:', error); // Para depuración
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-texto'>Crear cuenta</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre"><i className="fa-solid fa-user"></i> Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <section className='seccion-contrasena'>
            <div className="form-group">
              <label htmlFor="contraseña"><i className="fa-solid fa-lock"></i> Contraseña</label>
              <input
                type="password"
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmar-contraseña"><i className="fa-solid fa-lock"></i> Repetir contraseña</label>
              <input
                type="password"
                id="confirmar-contraseña"
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
              />
            </div>
          </section>
          <div className="form-group">
            <label htmlFor="telefono"><i className="fa-solid fa-phone"></i> Número de teléfono</label>
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="direccion"><i className="fa-solid fa-home"></i> Dirección</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <button type="submit" className="create-button">
            <i className="fas fa-user-plus"></i> Crear cuenta
          </button>
          <p className='cuenta-preg'>¿Ya tienes cuenta?</p>
          <button type="button" className="login-button" onClick={() => navigate('/Login')}>
            <i className="fa-solid fa-arrow-right"></i> Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
