import React from "react";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle"; // Assuming you still use it
import Home2 from "./Home2";
import Type from "./Type"; // Your typing effect component
import "./Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <Particle />
      <div className="home-content container">
        <div className="row">
          <div className="col left">
            <h1 className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I am <strong className="main-name">SAI KARANAM</strong>
            </h1>
            <div className="type-wrap">
              <Type />
            </div>
          </div>
          <div className="col right">
            <img
              src={homeLogo}
              alt="home"
              className="home-img"
            />
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
