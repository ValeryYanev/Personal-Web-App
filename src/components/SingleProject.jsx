import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({
  hoverProject,
  setHoverProject,
  hoverGh,
  setHoverGh,
  hoverLink,
  setHoverLink,
  containerName,
  ghLink,
  url,
  projectName,
  img1,
  img2,
  tech,
}) => {
  console.log(projectName);

  return (
    <>
      <div
        className={containerName}
        onMouseEnter={() => {
          setHoverProject(projectName);
        }}
        onMouseLeave={() => setHoverProject(undefined)}
      >
        <img className="frontPage" src={hoverProject == projectName ? img2 : img1} />
        <div className="projects-links">
          <Link
            to={ghLink}
            target="blank"
            rel="noopener"
            onMouseEnter={() => {
              setHoverGh(projectName);
            }}
            onMouseLeave={() => setHoverGh(undefined)}
          >
            <img src="/svg/github.svg" className={`url-link link-gh ${hoverGh == projectName ? "white-bg-gh" : ""}`} />
          </Link>
          <Link
            to={url}
            target="blank"
            rel="noopener"
            onMouseEnter={() => {
              setHoverLink(projectName);
            }}
            onMouseLeave={() => setHoverLink(undefined)}
          >
            <img src="/svg/link.svg" className={`url-link ${hoverLink == projectName ? "white-bg-link" : ""}`} />
          </Link>
        </div>
      </div>
      <div className="tech-container">
        <p className="tech">technologies:</p>
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
