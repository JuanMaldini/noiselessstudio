import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-circle"></div>
          <div className="logo-icon">
            <div className="person-icon"></div>
          </div>
        </div>
        <div className="navbar-menu">
          <a href="#about" className="navbar-item">ABOUT ME</a>
          <a href="#projects" className="navbar-item">PROJECTS</a>
          <a href="#contact" className="navbar-item">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
