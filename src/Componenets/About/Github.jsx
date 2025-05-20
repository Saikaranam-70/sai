import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

function Github() {
  return (
    <div className="github-section">
      <h1 className="project-heading">
        Days I <span className="purple">Code</span>
      </h1>
      <div className="calendar-wrapper">
        <GitHubCalendar
          username="Saikaranam-70"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
