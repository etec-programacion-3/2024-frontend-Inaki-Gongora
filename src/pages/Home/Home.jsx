// src/pages/Home.js
import React from 'react';
// import MenuDesplegable from '../components/MenuDesplegable.js';
import './Home.css';
import fondoLanding from '../../assets/fondo-landing.png';

const Home = () => {
  return (
    <div className="fondo">
      {/* <MenuDesplegable /> */}
      <main>
        <h1 className="titulo-landing-main">ZEPHYR<span className="marca-registrada">&reg;</span></h1>
        <div className="nueva-coleccion">
         <img src={fondoLanding }></img>
          <p className="nueva-coleccion-texto">NUEVA COLECCIÓN - 2024</p>
        </div>
        <div className="nuestros-productos">
          <h1 className="nuestros-productos-texto">EXPLORAR COLECCIONES</h1>
        </div>
        <section className="seccion-ver-productos">
          <div className="ver-anillos">
            <a href="/anillos" className="ver-productos">ANILLOS</a>
          </div>
          <div className="ver-aros">
            <a href="/aros" className="ver-productos">AROS</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
