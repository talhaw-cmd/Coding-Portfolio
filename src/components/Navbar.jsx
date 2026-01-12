import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* LOGO */}
        <div className="nav-logo">
          <a href="/">Talha<span className="bold">Devs</span></a>
        </div>

        {/* DESKTOP MENU */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/projects" onClick={() => setIsOpen(false)}>Work</a></li>
          <li><a href="/contact" onClick={() => setIsOpen(false)} className="nav-cta">Hire Me</a></li>
        </ul>

        {/* HAMBURGER ICON */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;