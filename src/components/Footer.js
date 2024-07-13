import React from 'react';
import './Footer.css';
import twitterIcon from '../Images/linkedIn.png';
import discord from '../Images/discord.jpeg';
import instagram from '../Images/insta.jpeg';
import slack from '../Images/slack.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <img src={slack} alt="GitHub" />
          </a>
          <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#" target="" rel="">
            <img src={instagram} alt='instagram'/>  
          </a> 
           <a href="#" target="" rel="">
            <img src={discord} alt='instagram'/>  
          </a>    
        </div>
        <div className="contact-info">
          <p>Email: joekaleli9@gmail.com</p>
          <p>Phone: +2547 0385 5490</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Joe Mburu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
