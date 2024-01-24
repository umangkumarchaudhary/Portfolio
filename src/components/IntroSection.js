import React, { useEffect, useRef } from 'react';
import './IntroSection.css';
import myPicture from '../../src/components/assest/img.jpeg';

const IntroSection = () => {
  const professionContainerRef = useRef(null);

  useEffect(() => {
    // Add animation class after component mounts
    professionContainerRef.current.classList.add('animate');
  }, []);

  return (
    <div className="intro-section">
      <div className="left-section">
        <div id="greeting" className="animated-text">
          <span>Hi There</span> <span role="img" aria-label="hand-wave">👋</span>
        </div>
        <div id="name" className="animated-text">I'M Umang Kumar</div>
        <div id="profession-container" ref={professionContainerRef}>
          <div className="profession">Competitive Programmer</div>
          <div className="profession">Open Source Contributor</div>
          <div className="profession">Developer</div>
        </div>
      </div>
      <div className="right-section" style={{ backgroundImage: `url(${myPicture})` }}></div>
    </div>
  );
};

export default IntroSection;
