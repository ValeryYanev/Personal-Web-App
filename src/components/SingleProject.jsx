import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({ containerName, url, img1, tech }) => {
  return (
    <>
      <Link to={url} target="_blank" className="project-container">
        <img className="frontPage" src={img1} />
        <div className="projects-links"></div>
      </Link>
      <div className="tech-container">
        <p className="tech">Technologies:</p>
        <div className="stack">
          {tech.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProject;
