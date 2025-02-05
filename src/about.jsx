import React from "react";
import GabPic from "../src/assets/GabPic.jpeg";

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img
            src={GabPic}
            alt="Gab's Profile"

            style={{
              width: "200px",
              height: "auto",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
      <p>
        I’m a Front-end Developer and UI/UX Designer passionate about creating
        clean and user-friendly digital experiences.
      </p>
    </div>
  );
};

export default About;
