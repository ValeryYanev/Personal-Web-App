import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ aboutRef, projectsRef }) => {
  const [scrollAbout, setScrollAbout] = useState(null);
  const [scrollProjects, setScrollProjects] = useState(null);

  useEffect(() => {
    setScrollAbout(aboutRef.current);
    setScrollProjects(projectsRef.current);
  }, [aboutRef, projectsRef]);

  return (
    <div className="nav-container">
      <nav className="navbar-nav">
        <Link to="/">
          <img className="logo" src="/images/Logo.png" height="72px" />
        </Link>
        <ul className="navbar-ul">
          <li className="navbar-li" onClick={() => scrollAbout.scrollIntoView({ behavior: "smooth" })}>
            <span className="list-number">01.</span>About
          </li>
          <li className="navbar-li" onClick={() => scrollProjects.scrollIntoView({ behavior: "smooth" })}>
            <span className="list-number">02.</span>Projects
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
