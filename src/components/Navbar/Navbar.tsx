
import React from 'react';
import './Navbar.css';
// import { openEmail } from '../functions';
import logo from "/Logo.svg";
import '../../App.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <img src={logo} alt="Logo"/>
            <span className="thompson minisonFont">NOISELESS</span>
          </div>
        </div>
        <div className="navbar-menu">
          <span
            className="navbar-item minisonFont"
            onClick={() => {
              const emailEl = document.getElementById('footer-email');
              if (emailEl) {
                emailEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            tabIndex={0}
            role="button"
          >
            CONTACT
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
