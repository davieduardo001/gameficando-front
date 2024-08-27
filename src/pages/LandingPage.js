// src/components/LandingPage.js
import React from 'react';
import '../styles/LandingPage.css';
import Features from '../components/Features';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <Header/>

      <Features/>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default LandingPage;

