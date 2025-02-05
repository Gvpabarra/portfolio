// File: About.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React from "react";
import GabPic from "../src/assets/GabPic.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">

        <div className="about-image-container">
          <img src={GabPic} alt="Gab's Profile" className="about-image" />
          <div className="resume-download">
            <h1>Download My Resume</h1>
            <button
              className="button"
              onClick={() =>
                window.open("/resume.pdf", "ResumeWindow", "width=800,height=600")
              }
            >
              Get My Resume
            </button>
          </div>
        </div>

        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I’m Gabriel Abarra, a passionate Software Engineer, Web
            Developer, and Creative Designer based in Toronto, ON. With a
            strong foundation in software development, database management, and
            UI/UX design, I specialize in creating innovative and user-friendly
            digital solutions.
          </p>
          <ul>
            <li>
              <strong>Web Development & Design:</strong> Designed and developed
              websites with HTML, CSS, TypeScript, and React.
            </li>
            <li>
              <strong>Software & Database Development:</strong> Built
              applications like a grading system with JavaFX and Oracle Database
              and a fraction calculator in C# with Windows Forms.
            </li>
            <li>
              <strong>Creative & Visual Design:</strong> Experience in layout
              design, video editing, and graphic design using Adobe Creative
              Suite, Sony Vegas, and Canva.
            </li>
          </ul>
          <p>
            I am always eager to learn, innovate, and contribute to meaningful
            projects. Let’s connect and build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};


export default About;
