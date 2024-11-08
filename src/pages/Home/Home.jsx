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
          </div>
        </div>

        <section className="seccion">
          <Link to="/anillos" className="div-imagenes">
            <h1 className='ArosAnillos'>Anillos</h1>
          </Link>
          <Link to="/aros" className="div-imagenes1">
            <h1 className='ArosAnillos'>Aros</h1>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
