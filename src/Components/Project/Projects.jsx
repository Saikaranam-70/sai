import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../assets/Projects/youtube.png";

import chatify from "../../assets/Projects/red.png";
import suicide from "../../assets/Projects/gemini.png";
import bitsOfCode from "../../assets/Projects/clg.png";
import billing from "../../assets/Projects/billing.png";
import doctor1 from '../../assets/Projects/doctor1.png'
import doctor2 from '../../assets/Projects/doctor2.png'
import kolors from '../../assets/Projects/kolors.png'
import ecommerce from '../../assets/Projects/ecommerce.png'

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
            imgPath={billing}
            isBlog={false}
            title="Billing Software"
            description="Built a full-stack billing and inventory management system using Spring Boot, React.js, and MySQL. Features include real-time invoice generation, category and item management, and secure authentication with JWT. Focused on delivering a modern UI with smooth animations, responsive layouts, and intuitive user interactions to ensure seamless business operations and enhanced user experience."
            frontendLink="https://github.com/Saikaranam-70/billingSoftware.git"
            backendLink="https://github.com/Saikaranam-70/billing-software-backend.git"
            liveLink="https://billing-software-omega.vercel.app/"
          />
          <ProjectCard
            imgPath={ecommerce}
            isBlog={false}
            title="SaGa E-Commerce"
            description="This is a full-stack e-commerce web application built using Spring Boot for backend APIs and React (Vite) with Tailwind CSS for the UI.
The platform allows users to browse products, add items to cart, and proceed to checkout with a smooth and responsive user experience.
It includes secure user authentication (JWT) and role-based access for user and admin functionalities.

The system is integrated with a Payment Gateway (Razorpay) for safe and reliable online transactions.
Users can make payments directly during checkout, and order details are recorded and stored securely.

An Admin Panel is provided to manage the product catalog, pricing, and order statuses, ensuring complete control over the store."
            frontendLink="https://github.com/Saikaranam-70/SaGa.git"
            backendLink="https://github.com/Saikaranam-70/SaGaBackend.git"
            // liveLink="https://billing-software-omega.vercel.app/"
          />
          <ProjectCard
            imgPath={doctor1}
            isBlog={false}
            title="Doctor Website 1 (Freelancing)"
            description="Built a full-stack personal doctor portfolio and management website as a freelancing project using Node.js, React.js, and MongoDB. Features include doctor profile display, testimonial management, and blog publishing with secure authentication for content updates. Focused on delivering a modern, responsive, and visually engaging interface with smooth animations and an intuitive dashboard, enabling the doctor to easily manage personal information and connect effectively with patients."
            frontendLink="https://github.com/Saikaranam-70/Dr.-B.-Sahithi-Priya.git"
            backendLink="https://github.com/Saikaranam-70/drsahithipriyabackend.git"
            liveLink="https://drsahithipriya.com/"
          />
          <ProjectCard
            imgPath={doctor2}
            isBlog={false}
            title="Doctor Website 2 (Freelancing)"
            description="Built a full-stack personal doctor portfolio and management website as a freelancing project using Node.js, React.js, and MongoDB. Features include doctor profile display, testimonial management, and blog publishing with secure authentication for content updates. Focused on delivering a modern, responsive, and visually engaging interface with smooth animations and an intuitive dashboard, enabling the doctor to easily manage personal information and connect effectively with patients."
            frontendLink="https://github.com/Saikaranam-70/Dr.BammidiSandeep.git"
            backendLink="https://github.com/Saikaranam-70/drsahithipriyabackend.git"
            liveLink="https://drsandeepbammidi.com/"
          />
          <ProjectCard
            imgPath={kolors}
            isBlog={false}
            title="Kolors Digital Services"
            description="Built a full-stack digital services website for Kolors Digital as a freelancing project using Node.js, React.js, and MongoDB. Features include service showcase, portfolio display, client testimonials, and blog publishing, with a secure admin dashboard for content management. Focused on delivering a modern, responsive, and visually appealing interface with smooth animations, dynamic content, and an intuitive workflow to enhance user engagement and provide a professional online presence for the company."
            
            liveLink="https://kolors.in/"
          />
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="Red Cross Connect"
            description="Built a MERN stack blood donation management site for efficient donor-recipient coordination. Features dynamic state selection, user notifications, and responsive design. Emphasized high-quality visuals, animations, and updated color schemes for an enhanced user experience."
            ghLink="https://github.com/Saikaranam-70/red"
            liveLink="https://red-cross-connect.vercel.app/"
          />

          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="College Website"
            description="I am developing a MERN stack college website with login functionality for principals, HODs, and students. Each user type can add and manage data, which is displayed dynamically on the site. This project highlights my skills in full-stack development, user authentication, and real-time data management."
            ghLink="https://github.com/Saikaranam-70/collegeWebsiteFrontEnd"
            liveLink="https://sanketika.vercel.app/"
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
