import React from 'react';
import './Header.css'; // Importar estilos específicos do componente

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Minha Landing Page</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
