import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-brand">Regoju Anjaneya Chary</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
