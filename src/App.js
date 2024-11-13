// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Anillos from './pages/Anillos/Anillos';
import Aros from './pages/Aros/Aros';
import Carrito from './pages/Carrito/Carrito';
import Login from './pages/Usuario/Login';
import Registro from './pages/Usuario/Registro';
import NotFound from './pages/NotFound/NotFound';
import ProductoDetalle from './pages/ProductoDetalle/ProductoDetalle';
import Contacto from './pages/Contacto/Contacto.jsx';
import Perfil from './pages/Usuario/Perfil.jsx';
import Buscar from './pages/Buscar/Buscar.jsx';
import Footer from './components/layout/Footer';
import Header from './components/Header.js';
import { AuthProvider } from './context/AuthContext';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/anillos" element={<Anillos />} />
              <Route path="/aros" element={<Aros />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/producto/:id" element={<ProductoDetalle />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/buscar" element={<Buscar />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;