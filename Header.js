// src/components/Header.js
import React from 'react';
import './Header.css'; // Puedes agregar CSS personalizado para estilos.

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Sol Degen</h1>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
