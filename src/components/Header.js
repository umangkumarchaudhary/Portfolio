import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import './Header.css';

const Header = () => {
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);
  const [isHireMeMoving, setHireMeMoving] = useState(false);

  const handleHireMeClick = () => {
    // Implement your desired action when the "Hire Me" button is clicked
    // For now, let's just alert a message
    alert('Hire Me clicked!');
  };

  const handleToggleNavMenu = () => {
    setNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="nav-menu-container">
        <div className={`nav-toggle-btn`} onClick={handleToggleNavMenu}>
          ☰
        </div>

        <ul className={`nav-menu ${isNavMenuOpen ? 'open' : ''}`}>
          <ScrollLink to="home" smooth={true} duration={500}>
            <li>Home</li>
          </ScrollLink>
          <ScrollLink to="about-me-section" smooth={true} duration={500}>
            <li>About</li>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <li>Projects</li>
          </ScrollLink>
          <ScrollLink to="experience" smooth={true} duration={500}>
            <li>Experience</li>
          </ScrollLink>
          <ScrollLink to="education" smooth={true} duration={500}>
            <li>Education</li>
          </ScrollLink>
          <ScrollLink to="certificates" smooth={true} duration={500}>
            <li>Certificates</li>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <li>Contact</li>
          </ScrollLink>
        </ul>
      </div>

      <div className="hire-me-section">
      <button
      className={`hire-me-btn ${isHireMeMoving ? 'moving' : ''}`}
      onClick={handleHireMeClick}
      onMouseEnter={() => setHireMeMoving(true)}
      onMouseLeave={() => setHireMeMoving(false)}
    >
      Hire Me
    </button>
      </div>
    </header>
  );
};

export default Header;
