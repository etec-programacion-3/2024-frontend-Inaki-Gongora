import React, { useState, useEffect } from 'react';
import './Home.css';
import Video1 from './../../assets/Video1.mp4';
import Video2 from './../../assets/Video2.mp4';
import Video3 from './../../assets/Video3.mp4';
import VideoAros from './../../assets/VerAros.mp4';
import VideoAnillos from './../../assets/VerAnillos.mp4';

const Home = () => {
  // Estado para el video de fondo
  const [videoFondo, setVideoFondo] = useState('');

  // Función para elegir aleatoriamente un video de fondo
  const elegirVideoAleatorio = () => {
    const videos = [Video1, Video2, Video3];
    const videoAleatorio = videos[Math.floor(Math.random() * videos.length)];
    console.log('Video seleccionado:', videoAleatorio);  // Imprime el video seleccionado
    setVideoFondo(videoAleatorio);
  };

  // Ejecutar la función cuando el componente se monte
  useEffect(() => {
    elegirVideoAleatorio();
  }, []);

  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="video-background">
        {videoFondo && (
          <video className="video-fondo" autoPlay loop muted>
            <source src={videoFondo} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        )}

        <div className="Imagen-fondo">
          <div className="div-coleccion">
            <p className="Nueva-Coleccion"> Nueva Colección 2024 </p>
            <p className="Subtitulo"> Acepte lo inesperado </p>
          </div>
        </div>
      </div>
      <div className="zephyr-div">
        <div className="zephyr-info">
          <h1 className="titulo-zephyr">
            Zephyr: Arte y Elegancia en Joyería de Lujo
          </h1>
          <h3 className="descripcion-zephyr">
            En Zephyr, redefinimos el lujo a través de diseños únicos y sofisticados.
            Cada anillo y aro es una obra de arte, cuidadosamente elaborada con materiales de
            la más alta calidad para realzar tu estilo y celebrar tu singularidad. Explora
            nuestras colecciones y descubre la esencia de la elegancia eterna.
          </h3>
        </div>
      </div>
      <h1 className="titulo-zephyr-productos"> Nuestros productos </h1>
      <section className="seccion">
        <div className="Aros">
          <div className="video-aros">
            <video className="video-aros" autoPlay loop muted>
              <source src={VideoAnillos} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>

        <div className="Anillos">
          <div className="video-anillos">
            <video className="video-anillos" autoPlay loop muted>
              <source src={VideoAros} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
