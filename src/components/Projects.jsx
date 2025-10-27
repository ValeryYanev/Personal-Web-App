import React from "react";
import "./Projects.css";
import SingleProject from "./SingleProject";

const Projects = ({ projectsRef }) => {
  setTimeout(function () {
    document.body.className = "";
  }, 500);

  return (
    <div className="projects stopLoad" ref={projectsRef}>
      <p className="intro"> My projects:</p>
      <div className="all-projects">
        <div className="project">
        </div>
        <div className="project">
          <SingleProject
            img1={"/images/dominos-clone.jpg"}
            url={"https://dominos-clone-app.vercel.app/"}
            tech={["TypeScript", "React", "Css", "Nodejs", "ExpressJS", "MongoDB"]}
          />
        </div>
        <div className="project">
          <SingleProject
            img1={"/images/fitness.jpg"}
            url={"https://mindcraft-fitness.vercel.app/"}
            tech={["React", "Css", "Nodejs", "ExpressJS", "MongoDB"]}
          />
        </div>
        <div className="project">
          <SingleProject
            img1={"/images/nature.jpg"}
            url={"https://nature-in-bulgaria.vercel.app/"}
            tech={["html", "Css", "JavaScript"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
