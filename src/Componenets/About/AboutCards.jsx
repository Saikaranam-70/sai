import React from "react";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css";

function AboutCard() {
  return (
    <div className="quote-card">
      <div className="quote-card-body">
        <blockquote>
          <p>
            Hi Everyone, I am <span className="purple">SAI MANIKANTA KARANAM</span> from{" "}
            <span className="purple">Visakhapatnam, India.</span>
            <br />
            <br />
            I am a student currently pursuing my final year diploma.
            <br />
            <br />
            Apart from coding, some activities I love to do:
          </p>
          <ul className="about-activities">
            <li><ImPointRight /> Playing Games</li>
            <li><ImPointRight /> Learning New Skills</li>
            <li><ImPointRight /> Travelling</li>
          </ul>
          <p className="quote-line">
            "It is not a bug, it is an undocumented feature"
          </p>
          <footer className="quote-footer">— Sai</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;
