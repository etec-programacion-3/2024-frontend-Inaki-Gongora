// src/pages/Contacto/Contacto.jsx
import React from 'react';
import './Contacto.css';

const Contacto = () => {

  return (
    <div className="contacto-container">
      <h1>Contactanos</h1>
      <p>
        En Zephyr estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestros productos o servicios,
        no dudes en contactarnos mediante el siguiente formulario o a través de nuestros datos de contacto.
      </p>
      <div className="contacto-info">
        <p><strong>Dirección:</strong> Perito Moreno 220</p>
        <p><strong>Teléfono:</strong> +54 261 218 4211</p>
        <p><strong>Email:</strong> <a href="mailto:zephyrinfo@gmail.com">zephyrinfo@gmail.com</a></p>
        <p>Horario de atención: Lunes a Viernes de 9:00 a 14:00 hs</p>
      </div>

    </div>
  );
};

export default Contacto;