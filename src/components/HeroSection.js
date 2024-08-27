import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h2>Bem-vindo à nossa landing page!</h2>
        <p>Descubra nossas incríveis funcionalidades.</p>
        <a href="#features" className="cta-button">Saiba Mais</a>
      </div>
    </section>
  );
};

export default HeroSection;
