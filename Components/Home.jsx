// File: Home.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React, { useState, useEffect } from "react";
import GabPic from "../src/assets/GabPicHome.jpeg";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <h1>LOADING...</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-text">
            <h1>Welcome to My Digital Space!</h1>
            <p>
              Hi, I’m Gabriel Abarra, a Software Engineer, Web Developer, and
              Creative Designer passionate about crafting innovative digital
              solutions. Whether it’s building dynamic web applications,
              designing intuitive user experiences, or ensuring top-notch
              software quality, I’m always eager to turn ideas into reality.
              Explore my work, check out my projects, and feel free to
              connect, let’s create something amazing together!
            </p>
            <h1>Mission Statement</h1>
            <p>
              As a dedicated Software Engineer with a passion for web
              development, creative design, and quality assurance, I thrive on
              building user-centric solutions that blend functionality with
              aesthetics. With expertise in full-stack development, database
              management, and agile methodologies, I strive to create seamless
              digital experiences. My mission is to continuously innovate,
              solve complex problems, and contribute to projects that make a
              meaningful impact.
            </p>
            <a href="/about" className="home-button">
              Read More About Me
            </a>
          </div>

          <div className="home-image-container">
            <div className="home-image-wrapper">
              <img
                src={GabPic}
                alt="Gab's Profile"
                className="home-image"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} GV Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
