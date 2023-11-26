import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = ({ projectsRef }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="projects" ref={projectsRef}>
      <p className="intro"> my projects so far: </p>
      <div className="all-projects">
        <div className="nature">
          <Link to="https://bulgarian-nature.netlify.app/" target="blank">
            <img className="frontPage" src="/images/nature/frontPage1.png" />
          </Link>
          <div>
            <p className="tech" onClick={() => setShow(!show)}>
              technologies: {show ? "↑" : "↓"}
            </p>
            <div className={`${show ? "show" : "hide"} stack`}>
              <p className="html">html</p>
              <p className="css">css</p>
              <p className="js">javascript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
