
import React from 'react';
import './Navbar.css';
import { openEmail } from '../functions';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <img src="../../images/icons/logo.png" alt="Logo" />
            <p>Rodrigo Thompson</p>
          </div>
        </div>
        <div className="navbar-menu">
          <span className="navbar-item" onClick={openEmail} tabIndex={0} role="button">CONTACT</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
