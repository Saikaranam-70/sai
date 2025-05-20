import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCards";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <Particle />
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1>
              Know Who <span className="purple">I'M</span>
            </h1>
            <AboutCard />
          </div>
          <div className="about-img">
            <img src={laptopImg} alt="about" />
          </div>
        </div>

        <h1 className="section-heading">
          Professional <span className="purple">Skillset</span>
        </h1>
        <Techstack />

        <h1 className="section-heading">
          <span className="purple">Tools</span> I use
        </h1>
        <Toolstack />

        <Github />
      </div>
    </div>
  );
}

export default About;
