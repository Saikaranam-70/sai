// import React from "react";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";
// import PropTypes from "prop-types";
// import "./ProjectCards.css";  // We'll create this CSS file next

// function ProjectCards(props) {
//   return (
//     <div className="project-card">
//       <img className="project-img" src={props.imgPath} alt="project" />
//       <div className="project-content">
//         <h3 className="project-title">{props.title}</h3>
//         <p className="project-description">{props.description}</p>

//         <div className="project-buttons">
//           <a
//             href={props.ghLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-primary"
//           >
//             <BsGithub /> &nbsp;
//             {props.isBlog ? "Blog" : "GitHub"}
//           </a>

//           {!props.isBlog && props.demoLink && (
//             <a
//               href={props.demoLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-primary btn-demo"
//             >
//               <CgWebsite /> &nbsp; Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// ProjectCards.propTypes = {
//   imgPath: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   ghLink: PropTypes.string,
//   isBlog: PropTypes.bool,
//   demoLink: PropTypes.string,
// };

// export default ProjectCards;
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import PropTypes from "prop-types";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <div className="project-card">
      <img className="project-img" src={props.imgPath} alt="project" />
      <div className="project-content">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>

        <div className="project-buttons">
          {/* ✅ If both frontend & backend links exist */}
          {props.frontendLink && (
            <a
              href={props.frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <BsGithub /> &nbsp; Frontend
            </a>
          )}

          {props.backendLink && (
            <a
              href={props.backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <BsGithub /> &nbsp; Backend
            </a>
          )}

          {/* ✅ For single GitHub (if no frontend/backend split) */}
          {!props.frontendLink && !props.backendLink && props.ghLink && (
            <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <BsGithub /> &nbsp; GitHub
            </a>
          )}

          {/* Demo / Live buttons */}
          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-demo"
            >
              <CgWebsite /> &nbsp; Demo
            </a>
          )}

          {props.liveLink && (
            <a
              href={props.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-live"
            >
              <FaLink /> &nbsp; Live
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
  frontendLink: PropTypes.string,
  backendLink: PropTypes.string,
  demoLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export default ProjectCards;
