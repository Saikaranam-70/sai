import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiSpring,
} from "react-icons/si";
import "./Techstack.css";

function Techstack() {
  return (
    <div className="techstack-section">
      <div className="tech-icons">
        <DiJavascript1 />
        <DiNodejs />
        <DiReact />
        <DiMongodb />
        <SiSpringboot />
        <DiGit />
        <SiSpringsecurity />
        <SiSpring />
        <DiCss3 />
        <DiPython />
        <DiJava />
        <DiHtml5 />
      </div>
    </div>
  );
}

export default Techstack;
