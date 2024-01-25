import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import './AboutMeSection.css';

import aboutMeImage from "../../src/components/assest/_546581e5-9c80-478c-be07-ea004354e70a.jpg"; 
import icon1 from "../../src/components/assest/_f3962bb5-f460-4537-b09c-edd8873a3654.jpg"
import icon2 from "../../src/components/assest/_c8052dc5-0427-460b-9199-2f50a7eb1260.jpg"
import icon3 from "../../src/components/assest/_608d022e-9c9e-42f4-9f2a-28bdbb9153c7.jpg"
import icon4 from "../../src/components/assest/_0c3ca895-904a-4d4c-8c68-951494c63eb8.jpg"



const AboutMeSection = () => {
  const fullContainerRef = useRef(null);

  useEffect(() => {
    // Add scroll event listener to trigger animation
    const handleScroll = () => {
      if (fullContainerRef.current) {
        const elementTop = fullContainerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          autoAnimate(fullContainerRef.current);
          window.removeEventListener("scroll", handleScroll); // Remove the event listener once animation is triggered
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts



  return (
  <div className="full-container" ref={fullContainerRef} id="about-me-section">
      <div className="container">
        <div className="image-container">
        <h2 className="section-heading">About Me</h2>
          <img className="image" src={aboutMeImage} alt="About Me" />
        </div>
        <div className="content">
          <p className="personal-story">
            Hello! I'm Umang Kumar, a passionate B.Tech student majoring in
            Computer Science and Engineering at Lovely Professional University. My
            academic journey has been filled with exploration and hands-on
            experience in various technologies. I started coding when I was in high
            school and I fell in love with web development ever since. I enjoy
            creating beautiful and functional websites that solve real-world
            problems. My dream is to work as a front-end developer in a leading
            tech company and make a positive impact on the world.
          </p>
          <div className="intro-section">
            <p className="intro">
              Here are some of the things that I can offer you as a web developer:
            </p>
            <ul className="list">
              <li className="list-item">
                <img className="icon" src={icon1} alt="Icon 1" /> Proficient in React, Node.js,
                and the latest web technologies
              </li>
              <li className="list-item">
                <img className="icon" src={icon2} alt="Icon 2" /> Experienced in creating
                dynamic websites with user-friendly interfaces and responsive
                design
              </li>
              <li className="list-item">
                <img className="icon" src={icon3} alt="Icon 3" /> Skilled in web design,
                development, and testing
              </li>
              <li className="list-item">
                <img className="icon" src={icon4} alt="Icon 4" /> Passionate about learning new
                technologies and solving problems
              </li>
              <li className="list-item">
                <img className="icon" src={icon1} alt="Icon 5" /> Ranked Top 10% on
                GeeksForGeeks and maintaining a daily LeetCode streak of 450+ days
              </li>
            </ul>
          </div>
          <a className="button" href="#projects">See my work</a>
        </div>
      </div>
    </div>
    
  );
};

export default AboutMeSection;