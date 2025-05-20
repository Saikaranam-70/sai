import React from "react";
import {
  SiPostman,
  
  SiIntellijidea,
  SiEclipseide,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc"; // Correct import for VS Code icon
import "./Toolstack.css";
import { FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <div className="toolstack-section">
      {/* <h2 className="toolstack-heading">
        Tools <span className="highlight">I Use</span>
      </h2> */}
      <div className="tool-icons">
        <FaWindows />
        <VscCode />  {/* Using the VS Code icon */}
        <SiPostman />
        <SiIntellijidea />
        <SiEclipseide />
      </div>
    </div>
  );
}

export default Toolstack;