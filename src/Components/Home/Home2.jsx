import React from "react";
import myImg from "../../assets/me.jpg"
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home2.css";

function Home2() {
  return (
    <section className="home-about-section" id="about">
      <div className="container about-container">
        <div className="row">
          <div className="col left">
            <h1>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <b className="purple"> Javascript, Node.js, and Java Spring and DataBases.</b>
              <br />
              <br />
              My field of interest includes building new{" "}
              <b className="purple">Web Technologies</b> and working with{" "}
              <b className="purple">React Native</b>.
              <br />
              <br />
              I enjoy developing with <b className="purple">Node.js</b> and{" "}
              <b className="purple">modern JavaScript frameworks</b> like{" "}
              <b className="purple">React.js</b>.
              <br />
              <br />
              Besides coding, I have strong skills in{" "}
              <b className="purple">Data Structures & Algorithms (DSA)</b>. I
              regularly practice problem-solving and enjoy optimizing
              solutions, which helps me write efficient and scalable code.
            </p>
          </div>
          <div className="col right">
            <div className="avatar-container">
              <img src={myImg} alt="avatar" className="avatar" />
            </div>
          </div>
        </div>
        <div className="row social-row">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/Saikaranam-70"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sai-karanam-610093343/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cl_me__sai_?igsh=dXZoenlzeTV0enZz"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home2;
