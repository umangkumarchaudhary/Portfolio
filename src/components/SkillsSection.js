import React from "react";
import styled from "styled-components";

// Function to dynamically import images
const importAllImages = (context) => {
  let images = {};
  context.keys().forEach((key) => (images[key] = context(key)));
  return images;
};

// Import all images from the "assest" folder
const images = importAllImages(
  require.context("../../src/components/assest", false, /\.(png|jpe?g|svg)$/)
);

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML", image: images["./html.png"] },
    { name: "CSS", image: images["./css.png"] },
    { name: "JavaScript", image: images["./js.png"] },
    { name: "React", image: images["./react.png"] },
    { name: "Tailwind CSS", image: images["./tcss.png"] },
  ];

  const backendSkills = [
    { name: "Node.js", image: images["./nodejs.png"] },
    { name: "Express", image: images["./express.jpg"] },
    { name: "REST API", image: images["./RestApis.jpg"] },
  ];

  const databaseSkills = [
    { name: "MongoDB", image: images["./mongodb.png"] },
    { name: "SQL", image: images["./sql.png"] },
    { name: "Firebase", image: images["./firebase.png"] },
  ];

  const machineLearningSkills = [
    { name: "Machine Learning", image: images["./ml.jpg"] },
    { name: "Natural Language Processing", image: images["./nlp.jpg"] },
    { name: "TensorFlow", image: images["./tesnorflow.png"] },
  ];

  const softSkills = [
    { name: "Team Player", image: images["./tp.jpg"] },
    { name: "Effective Communicator", image: images["./cskills.jpg"] },
    { name: "Problem Solving", image: images["./ps.jpg"] },
    { name: "Creative Skills", image: images["./cs.jpg"] },
  ];

  return (
    <Container>
      <BackgroundImage src={images["./bg.jpg"]} alt="Background Image" />
      <Overlay>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>Frontend</SkillCategory>
          {frontendSkills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillImage src={skill.image} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
          <SkillCategory>Backend</SkillCategory>
          {backendSkills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillImage src={skill.image} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
          <SkillCategory>Database</SkillCategory>
          {databaseSkills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillImage src={skill.image} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
          <SkillCategory>Machine Learning</SkillCategory>
          {machineLearningSkills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillImage src={skill.image} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
          <SkillCategory>Soft Skills</SkillCategory>
          {softSkills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillImage src={skill.image} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </SkillsGrid>
      </Overlay>
    </Container>
  );
};

export default SkillsSection;

const Container = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Overlay = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 240, 240, 0.9);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #222;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  margin: 2rem 0 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(120px, 1fr));
  grid-gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(120px, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, minmax(120px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(120px, 1fr));
  }
`;

const SkillCategory = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  grid-column: span 1;
  margin: 1rem 0;

  @media (min-width: 576px) {
    grid-column: span 2;
  }

  @media (min-width: 768px) {
    grid-column: span 3;
  }

  @media (min-width: 992px) {
    grid-column: span 4;
  }

  @media (min-width: 1200px) {
    grid-column: span 5;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const SkillImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  border-radius: 50%;
`;

const SkillName = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
`;
