import React from 'react';
import './Profile.css'; // Import the CSS styling
import profilePic from '../Images/Screenshot from 2024-08-26 00-22-43.png'; // Replace with the actual image path
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

const ProfileSection = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profilePic} alt="Profile" className="profile-picture" />
      </div>
      <div className="profile-description">
        <h1 className="profile-name">Rev Ruth Muita</h1>
        <p className="profile-title">Full-Stack Software Engineer</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

