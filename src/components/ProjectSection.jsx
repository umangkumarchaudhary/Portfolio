import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll"; // Import the Element component
import "./ProjectSection.css";
import ProjectOneImage from "../components/projectImage/amazonClone.png";

const projects = [
  {
    title: "Amazon Clone Using React Js",
    description: "Description of Project 1...",
    imageSrc: ProjectOneImage,
    githubRepo: "https://github.com/umangkumarchaudhary/E-Commercial-Website-Using-React-Js-",
  },
  {
    title: "Project 2",
    description: "Description of Project 2...",
    imageSrc: ProjectOneImage, // Replace with actual image source
    githubRepo: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Element name="projects" className="project-section">
      <h2 className="project-section-title">Projects</h2>
      <div className="project-section-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={project.imageSrc}
              alt={`Project ${index + 1}`}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.githubRepo}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default ProjectSection;
