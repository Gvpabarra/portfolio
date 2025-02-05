// File: Layout.jsx
// Student Name: Gabriel Abarra
// Student ID: 301429594
// Date: Feb 04, 2025

import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../src/assets/Logo.png";

const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", marginRight: "25px" }}
            />
          </Link>
          GV Website
        </div>
        <div
          className={`nav-links ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive(false)}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
