import React, { useState } from "react";
import "./Projects.css";
import SingleProject from "./SingleProject";

const Projects = ({ projectsRef }) => {
  const [hoverProject, setHoverProject] = useState("");
  const [hoverGh, setHoverGh] = useState("");
  const [hoverLink, setHoverLink] = useState("");

  setTimeout(function () {
    document.body.className = "";
  }, 500);

  return (
    <div className="projects stopLoad" ref={projectsRef}>
      <p className="intro"> my projects so far: </p>
      <div className="all-projects">
        <div className="project">
          <SingleProject
            hoverProject={hoverProject}
            setHoverProject={setHoverProject}
            hoverGh={hoverGh}
            setHoverGh={setHoverGh}
            hoverLink={hoverLink}
            setHoverLink={setHoverLink}
            containerName={"project-container"}
            projectName={"summoner-scoreboard"}
            img1={"/images/summoner-scoreboard/frontPage1.png"}
            img2={"/images/summoner-scoreboard/frontPage2.png"}
            ghLink={"https://github.com/valeriYanev01/Riot-Games-Project"}
            url={"https://summoner-scoreboard.vercel.app/"}
            tech={["react", "css", "Riot Games API"]}
          />
        </div>
        <div className="project">
          <SingleProject
            hoverProject={hoverProject}
            setHoverProject={setHoverProject}
            hoverGh={hoverGh}
            setHoverGh={setHoverGh}
            hoverLink={hoverLink}
            setHoverLink={setHoverLink}
            containerName={"project-container"}
            projectName={"fitness"}
            img1={"/images/fitness/frontPage1.png"}
            img2={"/images/fitness/frontPage2.png"}
            ghLink={"https://github.com/valeriYanev01/Fitness-Web-App"}
            url={"https://mindcraft-fitness.vercel.app/"}
            tech={["react", "css", "nodejs", "express", "mongodb"]}
          />
        </div>
        <div className="project">
          <SingleProject
            hoverProject={hoverProject}
            setHoverProject={setHoverProject}
            hoverGh={hoverGh}
            setHoverGh={setHoverGh}
            hoverLink={hoverLink}
            setHoverLink={setHoverLink}
            containerName={"project-container"}
            projectName={"nature"}
            img1={"/images/nature/frontPage1.png"}
            img2={"/images/nature/frontPage2.png"}
            ghLink={"https://github.com/valeriYanev01/Nature-In-Bulgaria-Website"}
            url={"https://nature-in-bulgaria.vercel.app/"}
            tech={["html", "css", "javascript"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
