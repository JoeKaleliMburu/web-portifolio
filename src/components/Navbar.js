
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#ministry">Ministry Duties</a></li>
        <li><a href="#family">Family</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
