import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = ({ projectsRef }) => {
  const [hoverNature, setHoverNature] = useState(false);
  const [hoverNatureGh, setHoverNatureGh] = useState(false);
  const [hoverNatureLink, setHoverNatureLink] = useState(false);
  const [hoverFitness, setHoverFitness] = useState(false);
  const [hoverFitnessGh, setHoverFitnessGh] = useState(false);
  const [hoverFitnessLink, setHoverFitnessLink] = useState(false);

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
            <p className="tech">technologies:</p>
            <div className="stack">
              <p className="html">html</p>
              <p className="css">css</p>
              <p className="js">javascript</p>
            </div>
          </div>
        </div>
        <div className="fitness">
          <div
            className="fitness-container"
            onMouseEnter={() => {
              setHoverFitness(true);
              setHoverFitnessGh(false);
              setHoverFitnessLink(false);
            }}
            onMouseLeave={() => setHoverFitness(false)}
          >
            <img
              className="frontPage"
              src={hoverFitness ? "/images/fitness/frontPage2.png" : "/images/fitness/frontPage1.png"}
            />
            <div className="projects-links">
              <Link
                to="https://github.com/valeriYanev01/Fitness-Web-App"
                target="blank"
                rel="noopener"
                onMouseEnter={() => {
                  setHoverFitnessGh(true);
                  setHoverFitnessLink(false);
                }}
                onMouseLeave={() => setHoverFitnessGh(false)}
              >
                <img
                  src="/svg/github.svg"
                  className={`fitness-link fitness-link-gh ${hoverFitnessGh ? "white-bg-gh" : ""}`}
                />
              </Link>
              <Link
                to="https://mindcraft-fitness.vercel.app/"
                target="blank"
                rel="noopener"
                onMouseEnter={() => {
                  setHoverFitnessGh(false);
                  setHoverFitnessLink(true);
                }}
                onMouseLeave={() => setHoverFitnessLink(false)}
              >
                <img src="/svg/link.svg" className={`fitness-link ${hoverFitnessLink ? "white-bg-link" : ""}`} />
              </Link>
            </div>
          </div>
          <div className="tech-container">
            <p className="tech">technologies:</p>
            <div className="stack">
              <p className="react">react</p>
              <p className="css">css</p>
              <p className="nodejs">nodejs</p>
              <p className="mongodb">mongodb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
