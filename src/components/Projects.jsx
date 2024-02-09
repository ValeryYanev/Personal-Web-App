import React, { useState } from "react";
import "./Projects.css";
import SingleProject from "./SingleProject";

const Projects = ({ projectsRef }) => {
  const [show, setShow] = useState(false);
  const [hoverNature, setHoverNature] = useState(false);
  const [hoverNatureGh, setHoverNatureGh] = useState(false);
  const [hoverNatureLink, setHoverNatureLink] = useState(false);

  setTimeout(function () {
    document.body.className = "";
  }, 500);

  return (
    <div className="projects stopLoad" ref={projectsRef}>
      <p className="intro"> my projects so far: </p>
      <div className="all-projects">
        <SingleProject
          show={show}
          setShow={setShow}
          hoverNature={hoverNature}
          setHoverNature={setHoverNature}
          hoverNatureGh={hoverNatureGh}
          setHoverNatureGh={setHoverNatureGh}
          hoverNatureLink={hoverNatureLink}
          setHoverNatureLink={setHoverNatureLink}
        />
      </div>
    </div>
  );
};

export default Projects;
