// EducationSection.js
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
        <div className="education-item" data-aos="fade-up" data-aos-delay="100">
          <h3 className="degree">Bachelor of Technology in Computer Science</h3>
          <p className="university">Lovely Professional University</p>
          <div className="details">
            <p className="year">Graduated: 2022</p>
            <p className="start-year">Start Year: 2018</p>
            <p className="end-year">End Year: 2022</p>
            <p className="cgpa">CGPA: 9.0/10.0</p>
            <p className="coursework">Academic Coursework: Advanced Algorithms, Web Development, Database Systems, etc.</p>
          </div>
        </div>
        {/* Add more education items as needed */}
      </div>
    </div>
  );
};

export default EducationSection;
