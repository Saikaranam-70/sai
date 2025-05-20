import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import PropTypes from "prop-types";
import "./ProjectCards.css";  // We'll create this CSS file next

function ProjectCards(props) {
  return (
    <div className="project-card">
      <img className="project-img" src={props.imgPath} alt="project" />
      <div className="project-content">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>

        <div className="project-buttons">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-demo"
            >
              <CgWebsite /> &nbsp; Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  isBlog: PropTypes.bool,
  demoLink: PropTypes.string,
};

export default ProjectCards;
