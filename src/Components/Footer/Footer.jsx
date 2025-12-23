import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Designed and Developed by Sai Manikanta Karanam</h3>
        </div>
        <div className="footer-section">
          <h3>Copyright © {year} Sai</h3>
        </div>
        <div className="footer-section footer-icons">
          <a
            href="https://github.com/Saikaranam-70"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-karanam-610093343/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/cl_me__sai_?igsh=dXZoenlzeTV0enZz"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
