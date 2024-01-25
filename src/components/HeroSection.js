import React, { useState, useEffect } from "react";
import styled from "styled-components";
import myPicture from "../../src/components/assest/img.jpeg";
import { motion } from "framer-motion"; // Import the motion component

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Competitive Programmer", "Open Source Contributor", "Developer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [roles.length]);

  // Define some variants for the image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  // Define some variants for the title animation
  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  // Define some variants for the subtitle animation
  const subtitleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
  };

  // Define some variants for the roles box animation
  const rolesBoxVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 1.5, duration: 0.5 } },
  };

  return (
    <Container>
      <Overlay>
        {/* Wrap the image with the motion component and pass the variants */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image src={myPicture} alt="Your photo" />
        </motion.div>
        <Content>
          {/* Wrap the title with the motion component and pass the variants */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <Title>
              Hi, I'm <span>Umang Kumar</span>
            </Title>
          </motion.div>
          {/* Wrap the subtitle with the motion component and pass the variants */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            <Subtitle>
              B.Tech student and passionate web developer looking for exciting
              opportunities
            </Subtitle>
          </motion.div>

          {/* Wrap the roles box with the motion component and pass the variants */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={rolesBoxVariants}
          >
            <RolesBox>
              <RolesAnimation>{roles[roleIndex]}</RolesAnimation>
            </RolesBox>
          </motion.div>

          <Button href="https://github.com/umangkumarchaudhary?tab=repositories">See my work</Button>

          
          <SocialButton
            href="https://www.linkedin.com/in/umang-kumar-0546b71b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialButton>

          
          <SocialButton
            href="https://leetcode.com/umangkumarchaudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </SocialButton>

          {/* GitHub Button */}
          <SocialButton
            href="https://github.com/umangkumarchaudhary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </SocialButton>
        </Content>
      </Overlay>
    </Container>
  );
};

export default HeroSection;

const RolesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px; /* Adjust the min-width based on your design */

  @media (max-width: 900px) {
    /* Responsive styling for smaller screens */
    min-width: 100%; /* Allow it to take full width on smaller screens */
  }
`;

const RolesAnimation = styled.span`
  font-size: 1.2rem;
  color: #333;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #1e90ff;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #007acc;
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    margin-top: 0.5rem; /* Adjust the margin for smaller screens */
  }
`;

const SocialButton = styled.a`
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
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
    margin-top: 10px; /* Adjust the margin for smaller screens */
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
  
  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    flex-direction: column; /* Changed the layout to column */
    height: auto; /* Removed the fixed height */
  }

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
    width: 60%; /* Reduced the width of the image */
  }
`;

const Content = styled.div`
  width: 80%;
  padding: 2rem;
  margin: 5rem; /* Added margin to the content */

  @media (max-width: 900px) {
    /* Styles for devices with width less than 900px */
    width: 80%; /* Reduced the width of the content */
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
