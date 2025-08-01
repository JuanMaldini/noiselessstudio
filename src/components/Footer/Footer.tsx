
import React from 'react';
import './Footer.css';
import { openInstagram, openEmail } from '../functions';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-actions">
      <span className="footer-link" onClick={openInstagram}>Instagram</span>
      <span className="footer-sep">|</span>
      <span className="footer-link" id="footer-email" onClick={openEmail}>noiseless3d@gmail.com</span>
    </div>
    <div>
      © 2025 NOISELESS. All rights reserved.
    </div>
  </footer>
);

export default Footer;
