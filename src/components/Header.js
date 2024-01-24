import React, { useState } from 'react';
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
          ☰ {/* Display a simple hamburger icon or any text/icon of your choice */}
        </div>

        <ul className={`nav-menu ${isNavMenuOpen ? 'open' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Certificates</li>
          <li>Contact</li>
          {/* Add more menu items as needed */}
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
