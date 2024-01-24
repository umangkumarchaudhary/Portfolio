import React, { useState, useEffect } from "react";
import styled from "styled-components";
import myPicture from "../../src/components/assest/img.jpeg";


const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Competitive Programmer", "Open Source Contributor", "Developer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <Container>
      <Overlay>
        <Image src={myPicture} alt="Your photo" />
        <Content>
          <Title>
            Hi, I'm <span>Umang Kumar</span>
          </Title>
          <Subtitle>
            B.Tech student and passionate web developer looking for exciting
            opportunities
          </Subtitle>

          <RolesBox>
            <RolesAnimation>{roles[roleIndex]}</RolesAnimation>
          </RolesBox>
          
          <Button href="#projects">See my work</Button>

          {/* LinkedIn Button */}
          <SocialButton href="[Your LinkedIn Profile]" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialButton>

          {/* LeetCode Button */}
          <SocialButton href="[Your LeetCode Profile]" target="_blank" rel="noopener noreferrer">
            LeetCode
          </SocialButton>

          {/* GitHub Button */}
          <SocialButton href="[Your GitHub Profile]" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialButton>
        </Content>
      </Overlay>
    </Container>
  );
};

export default HeroSection;

// ... (unchanged styles)

const SocialButton = styled.a`
  display: inline-block;
  margin-right: 10px;
  padding: 0.8rem 1.5rem;
  background-color: #1e90ff; /* Updated button color */
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #007acc; /* Updated hover color */
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    display: block;
    margin-bottom: 10px;
  }
`;




const Overlay = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  
`;


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: skyblue;
 
  padding: 2rem; /* Added padding to the container */

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    flex-direction: column; /* Changed the layout to column */
    height: auto; /* Removed the fixed height */
  }
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  margin: 1rem; /* Added margin to the image */

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    width: 30%; /* Reduced the width of the image */
  }
`;

const Content = styled.div`
  width: 50%;
  padding: 2rem;
  margin: 1rem; /* Added margin to the content */

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    width: 70%; /* Reduced the width of the content */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;

  span {
    color: #1e90ff; /* Highlight color for your name */
  }

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    font-size: 2rem; /* Reduced the font size of the title */
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    font-size: 1.2rem; /* Reduced the font size of the subtitle */
  }
`;



const RolesBox = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
  }
`;

const RolesAnimation = styled.p`
  font-size: 1.2rem;
  color: #1e90ff; /* Highlight color for roles */
  margin: 0;
  animation: fadeInOut 1.5s ease-in-out infinite; /* Fade animation */

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  margin-right : 20px;
  &:hover {
    background-color: #444;
    transform: scale(1.1);

  }

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    margin-bottom:10px;
    font-size: 1rem; /* Reduced the font size of the button */
  }
`;
