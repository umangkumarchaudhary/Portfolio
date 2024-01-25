import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll"; // Import the Element component
import "./ProjectSection.css";
import ProjectOneImage from "../components/projectImage/amazonClone.png";
import ProjectTwoImage from "../components/projectImage/Screenshot (853).png"
import ProjectThreeImage from "../components/projectImage/Screenshot (854).png"
import ProjectFourImage from "../components/projectImage/Screenshot (855).png"
import ProjectFiveImage from "../components/projectImage/Screenshot (856).png"
import ProjectSixImage from "../components/projectImage/Screenshot (857).png"
import ProjectSevenImage from "../components/projectImage/Screenshot (858).png"


const projects = [
  {
    title: "E-Commercial Website Using React Js",
    description: "This is basically a clone of Amazon website. Integrated Backend Using Backend and Used Stripe API for Pyament Integration.",
    imageSrc: ProjectOneImage,
    githubRepo: "https://github.com/umangkumarchaudhary/E-Commercial-Website-Using-React-Js-",
  },
  {
    title: "Business Website Portfolio (UI/UX design)",
    description: "Modern responsive business website design made with React and Tailwind CSS.",
    imageSrc: ProjectTwoImage,
    githubRepo: "https://github.com/umangkumarchaudhary/Buisness-website-UI-UX-design-project-",
  },
  {
    title: "Job Portal Website Using Node js and React",
    description: "The is a web application developed using React.js for the frontend and Node.js for the backend. ",
    imageSrc: ProjectOneImage,
    githubRepo: "https://github.com/umangkumarchaudhary/Job-Portal-with-admin-dashboard-using-React-js-and-Node-Js",
  },
  {
    title: "Blog Page Using JavaScript",
    description: "This is a basic Indian cricket Team Blog Page where i have added latest blog related to ICT and also integrated with API to show Live Updates Of ICT",
    imageSrc: ProjectThreeImage, 
    githubRepo: "https://umangkumarchaudhary.github.io/Blog-page-indian-cricket-team-/",
  },
  {
    title: "Weather APIs",
    description: "This is Simple Weather App which will show current weather of your location. Fetched Data from Apis to show the realtime data.",
    imageSrc: ProjectFourImage, // Replace with actual image source
    githubRepo: "https://github.com/umangkumarchaudhary/Weather-API",
  },
  {
    title: "Music Player Frontend",
    description: "This is simple Responsive Spotify clone with only Frontend features where User can play and Pause the song",
    imageSrc: ProjectFiveImage, 
    githubRepo: "https://github.com/umangkumarchaudhary/Music-Player-frontend-Projects-",
  },
  {
    title: "Blog Page with Editor Option",
    description: "This is simple Blog Page  using javascript where User can add and post thier blog in website. and also user can view it later",
    imageSrc: ProjectSixImage,
    githubRepo: "https://github.com/umangkumarchaudhary/Blog-page-with-editor-Option",
  },
  {
    title: "Quiz Website using HTML, CSS, JS",
    description: "This is Quiz website where User can select difficulty level as per their level and it will also correct and wrong answer.",
    imageSrc: ProjectSevenImage, 
    githubRepo: "https://umangkumarchaudhary.github.io/Quiz-website-Using-HTML-CSS-JAVASCRIPT/hard.html",
  },
  
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
