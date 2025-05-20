// src/components/Loader.js
import React from "react";
import loaderSvg from "./assets/pre.svg"; // adjust the path as needed
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={loaderSvg} alt="Loading..." className="loader-svg" />
    </div>
  );
};

export default Loader;
