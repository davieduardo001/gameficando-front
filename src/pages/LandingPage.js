// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-scroll'; // Import Link for smooth scrolling
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // Material icon
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to Our Landing Page</h1>
        <p>Best place to find amazing products and services.</p>
        {/* Button to scroll to the bottom */}
        <Link
          to="footer" // ID of the section to scroll to
          smooth={true} // Smooth scrolling
          duration={500} // Duration of scrolling (milliseconds)
          className="scroll-button"
        >
          Scroll to Bottom <ArrowDownwardIcon />
        </Link>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>

          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>  
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="footer">
        <p>Contact us at info@example.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;

