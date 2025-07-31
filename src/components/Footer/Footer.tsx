
import React from 'react';
import './Footer.css';
import { openInstagram, openEmail, openLinkedIn, openWhatsApp } from '../functions';

const Footer: React.FC = () => (
  <footer className="footer">
    <div>
      © 2025 Rodrigo
    </div>
    <div className="footer-actions">
      <span className="footer-link" onClick={openInstagram}>Instagram</span>
      <span className="footer-sep">|</span>
      <span className="footer-link" onClick={openEmail}>Email</span>
      <span className="footer-sep">|</span>
      <span className="footer-link" onClick={openLinkedIn}>LinkedIn</span>
      <span className="footer-sep">|</span>
      <span className="footer-link" onClick={openWhatsApp}>WhatsApp</span>
    </div>
  </footer>
);

export default Footer;
