import React from 'react';
import './HeroMain.css';

const img = '/renders/PAGINA 1.jpg';

const HeroMain: React.FC = () => {
  return (
    <div className="hero-main">
      <div className="hero-background">
        <img 
          src={img}
          alt="Hero Background" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Hola</h1>
        <h2 className="hero-subtitle-1">3D Artist</h2>
        <h3 className="hero-subtitle-2">Creating Digital Experiences</h3>
        
        <div className="hero-text">
          <p>Passionate about building innovative 3D models and animations with modern technologies. 
             Specialized in React, Node.js, and creating seamless user experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
