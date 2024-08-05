import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Dropdown from './Dropdown';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar for Joe-Dev">
        <h1 className="bg-primary- navar-item Darker Grotesque-bold">
          JOE -DEV
        </h1>
      </div>

      {window.innerWidth <= 768 && (
        <Dropdown isMenuOpen={isMenuOpen} />
      )}

      <div className='navbar-menu'>
        <div className="navbar-end">
          <Link 
            className="navbar-item Darker Grotesque-bold"
            to="About"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link 
            className="navbar-item Darker Grotesque-bold"
            to="Experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
          <Link 
            className="navbar-item Darker Grotesque-bold"
            to="Projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link 
            className="navbar-item Darker Grotesque-bold"
            to="Contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="material-symbols-outlined">
            close
          </span>
        ) : (
          <span className="material-symbols-outlined">
            menu
          </span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
