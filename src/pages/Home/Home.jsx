import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <div className="Imagen-fondo">
          <div>
            <p className="Nueva-Coleccion">ZEPHYR</p>
            <p className="Sigman">Nueva coleccion 2024</p>
          </div>
        </div>

        <section className="seccion">
          <Link to="/anillos" className="div-imagenes">
            <h1>Anillos</h1>
          </Link>
          <Link to="/aros" className="div-imagenes1">
            <h1>Aros</h1>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
