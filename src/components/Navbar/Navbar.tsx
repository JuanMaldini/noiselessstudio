
import React from 'react';
import './Navbar.css';
import { openEmail } from '../functions';
import logo from "/Logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <img src={logo} alt="Logo"/>
            <span className="thompson">Rodrigo</span>
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
