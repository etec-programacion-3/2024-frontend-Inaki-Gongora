import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import VideoFondo from './../../assets/video.mp4'; // Importa el video

const Home = () => {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="video-background">
        <video className="video-fondo" autoPlay loop muted>
          <source src={VideoFondo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="Imagen-fondo">
          <div className='div-coleccion'>
            <p className="Nueva-Coleccion"> Nueva Colección 2024 </p>
            <p className='Subtitulo'> Acepte lo inesperado </p>
          </div>
        </div>
      </div>

      <section className="seccion">
        <Link to="/anillos" className="div-imagenes">
          <h1 className="ArosAnillos">Anillos</h1>
        </Link>
        <Link to="/aros" className="div-imagenes1">
          <h1 className="ArosAnillos">Aros</h1>
        </Link>
      </section>
    </div>
  );
};

export default Home;