import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../assets/Projects/youtube.png";
// import emotion from "../../Assets/Projects/chat.png";
// import editor from "../../Assets/Projects/e-digital.png";
import chatify from "../../assets/Projects/red.png";
import suicide from "../../assets/Projects/gemini.png";
import bitsOfCode from "../../assets/Projects/clg.png";

import "./Projects.css";

function Projects() {
  return (
    <div className="project-section">
      <Particle />
      <div className="project-container">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>
        <div className="projects-grid">
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="Red Cross Connect"
            description="Built a MERN stack blood donation management site for efficient donor-recipient coordination. Features dynamic state selection, user notifications, and responsive design. Emphasized high-quality visuals, animations, and updated color schemes for an enhanced user experience."
            ghLink="https://github.com/Saikaranam-70/red"
          />

          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="College Website"
            description="I am developing a MERN stack college website with login functionality for principals, HODs, and students. Each user type can add and manage data, which is displayed dynamically on the site. This project highlights my skills in full-stack development, user authentication, and real-time data management."
            ghLink="https://github.com/Saikaranam-70/collegeWebsiteFrontEnd"
          />

          {/* <ProjectCard
            imgPath={editor}
            isBlog={false}
            title="E-Digital"
            description="I am developing an e-digital website designed to facilitate communication with customers and showcase our capabilities and projects. The site features an intuitive interface, comprehensive project displays, and interactive communication tools. This project demonstrates my expertise in web development, user engagement, and effective presentation of digital services."
            ghLink="https://github.com/Saikaranam-70/pavancreativehub"
          /> */}

          <ProjectCard
            imgPath={leaf}
            isBlog={false}
            title="Youtube Clone"
            description="I am developing a YouTube clone that fetches data from APIs to display videos and related information. This project demonstrates my proficiency in integrating APIs to build a dynamic and functional video-sharing platform."
            ghLink="https://github.com/Saikaranam-70/youtube-clone"
          />

          <ProjectCard
            imgPath={suicide}
            isBlog={false}
            title="Gemini AI Clone"
            description="I am developing a Gemini clone, focusing on replicating core functionalities of the Gemini platform. The project involves integrating key features and ensuring a seamless user experience. This work showcases my skills in building and customizing platforms to meet specific functional requirements."
          />

          {/* <ProjectCard
            imgPath={emotion}
            isBlog={false}
            title="Chat Application"
            description="I am developing a chat application with a Node.js backend, supporting real-time messaging between users. The application features a user list on the opening page with follow functionality for initiating conversations. This project highlights my expertise in real-time communication, backend development, and user interface design."
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
