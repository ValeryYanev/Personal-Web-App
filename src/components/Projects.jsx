import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

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
        <div className="nature">
          <div
            className="nature-container"
            onMouseEnter={() => {
              setHoverNature(true);
              setHoverNatureGh(false);
              setHoverNatureLink(false);
            }}
            onMouseLeave={() => setHoverNature(false)}
          >
            <img
              className="frontPage"
              src={hoverNature ? "/images/nature/frontPage2.png" : "/images/nature/frontPage1.png"}
            />
            <div className="projects-links">
              <Link
                to="https://github.com/valeriYanev01/Nature-In-Bulgaria-Website"
                target="blank"
                rel="noopener"
                onMouseEnter={() => {
                  setHoverNatureGh(true);
                  setHoverNatureLink(false);
                }}
                onMouseLeave={() => setHoverNatureGh(false)}
              >
                <img
                  src="/svg/github.svg"
                  className={`nature-link nature-link-gh ${hoverNatureGh ? "white-bg-gh" : ""}`}
                />
              </Link>
              <Link
                to="https://bulgarian-nature.netlify.app/"
                target="blank"
                rel="noopener"
                onMouseEnter={() => {
                  setHoverNatureGh(false);
                  setHoverNatureLink(true);
                }}
                onMouseLeave={() => setHoverNatureLink(false)}
              >
                <img src="/svg/link.svg" className={`nature-link ${hoverNatureLink ? "white-bg-link" : ""}`} />
              </Link>
            </div>
          </div>
          <div className="tech-container">
            <p className="tech" onClick={() => setShow(!show)}>
              technologies: {show ? "↑" : "↓"}
            </p>
            <div className={`${show ? "show" : "hide"} stack`}>
              <p className={`${show ? "htmlOn" : "htmlOff"} html`}>html</p>
              <p className={`${show ? "cssOn" : "cssOff"} css`}>css</p>
              <p className={`${show ? "jsOn" : "jsOff"} js`}>javascript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
