import React from 'react';
import './Home.css';
import linkedinIcon from '../Images/linkedIn.png';
import githubIcon from '../Images/download (1).jpeg';
import profile from '../Images/IMG-20240803-WA0006.jpg';
import python from '../Images/python.jpeg';
import javascript from '../Images/js.jpeg';
import dbImage from '../Images/db.jpeg';
import { Element } from 'react-scroll';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div className='container'>
        <div className='left-nav'>
          <h1>Full Stack Software Engineer 👏</h1>
          <h4>
            Hi, I'm Joe Mburu. A passionate full-Stack software developer based in Nairobi, Kenya.
          </h4>
          <div className='icons'>
            <div className='linkedIn'>
              <a href='https://www.linkedin.com/in/your-linkedin-profile' target='_blank' rel='noopener noreferrer'>
                <img alt='LinkedIn' src={githubIcon} />
              </a>
            </div>
            <div className='Github'>
              <a href='https://github.com/your-github-profile' target='_blank' rel='noopener noreferrer'>
                <img alt='Github' src={linkedinIcon} />
              </a>
            </div>
          </div>
          <div className='right-nav'>
            <img alt='profile' src={profile} />
          </div>
          <div className='tech-stack'>
            <img src={python} alt='Python'></img>
            <img src={javascript} alt='JavaScript'></img>
            <img src={dbImage} alt='Database'></img>
          </div>
        </div>
      </div>
      <Element name='Projects' className='section'>
        <h2>Projects</h2>
        {/* Add your projects content here */}
      </Element>
      <Element name='About' className='section'>
        <h2>About</h2>
<h3>Moringa School</h3>
<h3>Software Engineering Graduate 2024</h3>
<p>
  As a full-stack software engineer, I specialize in frontend development using React.js and Vanilla JavaScript. On the backend, I am proficient in Flask and Django, both Python frameworks. For database management, I have expertise in SQL.
</p>

        {/* Add your about content here */}
      </Element>
      <Element name='Experience' className='section'>
        <h2>Experience</h2>
        {/* Add your experience content here */}
      </Element>
      <Element name='Contact' className='section'>
        <h2>Contact</h2>
        
        {/* Add your contact content here */}
      </Element>
      <Footer/>
    </div>
    
  );
}

export default Home;