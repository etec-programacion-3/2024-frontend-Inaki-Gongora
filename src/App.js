// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Anillos from './pages/Anillos/Anillos';
import Aros from './pages/Aros/Aros';
import Carrito from './pages/Carrito/Carrito';
import Login from './pages/Usuario/Login';
import Registro from './pages/Usuario/Registro';
import NotFound from './pages/NotFound/NotFound';
import ProductoDetalle from './pages/ProductoDetalle/ProductoDetalle';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anillos" element={<Anillos />} />
        <Route path="/aros" element={<Aros />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/producto/:nombreProducto" element={<ProductoDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;