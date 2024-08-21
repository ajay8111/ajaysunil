import React from 'react';
import './Footer.css';
import whatsappIcon from '../assets/whatsapp.png';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <a href="https://wa.me/+918111867410" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" /> WhatsApp
        </a>
        <a href="mailto:ajaysunil231@gmail.com" className="contact-link">
          <img src={emailIcon} alt="Email" className="contact-icon" /> Email
        </a>
        <a href="https://www.linkedin.com/in/ajay-sunil-1914a6268/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" /> LinkedIn
        </a>
        <a href="https://github.com/ajay8111" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={githubIcon} alt="GitHub" className="contact-icon" /> GitHub
        </a>
      </div>
      <p>Copyright © 2024 Ajay Sunil. All rights reserved</p>
    </footer>
  );
};




export default Footer;
