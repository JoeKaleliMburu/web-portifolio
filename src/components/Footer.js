import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Rev Ruth Muita| All Rights Reserved</p>
        <p>Contact: <a href="mailto:jane.doe@example.com">joekaleli9@gmail.com</a></p>
        <div className="social-media">
          <a href="https://www.facebook.com/fatherjane" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/fatherjane" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/fatherjane" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
