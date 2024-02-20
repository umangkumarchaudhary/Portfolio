import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EducationSection.css";

const EducationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="education-section" id="education" data-aos="fade-up">
      <h2 className="section-heading">Education</h2>
      <div className="education-content">
        {/* Bachelor's degree */}
        <div className="education-item" data-aos="fade-up" data-aos-delay="100">
          <h3 className="degree">Bachelor of Technology in Computer Science</h3>
          <p className="university">Lovely Professional University</p>
          <div className="details">
            <p className="year">Graduated: 2024</p>
            <p className="start-year">Start Year: 2020</p>
            <p className="cgpa">CGPA: 7.5/10.0</p>
            <p className="coursework">Academic Coursework: Advanced Algorithms, Web Development, Database Systems, Operating System, Cloud Computing, Machine Learning , Computer Vision , Natural Language Processing, Deep Learning</p>
          </div>
        </div>

        {/* 12th Grade */}
        <div className="education-item" data-aos="fade-up" data-aos-delay="200">
          <h3 className="degree">12th Grade</h3>
          <p className="university">Paramount Academy</p>
          <div className="details">
            <p className="year">Year of Completion: 2020</p>
            {/* Add more details as needed */}
          </div>
        </div>

        {/* 10th Grade */}
        <div className="education-item" data-aos="fade-up" data-aos-delay="300">
          <h3 className="degree">10th Grade</h3>
          <p className="university">The Jaintpur Public School</p>
          <div className="details">
            <p className="year">Year of Completion: 2017</p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
