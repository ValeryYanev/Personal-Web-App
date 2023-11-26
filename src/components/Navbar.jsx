import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ aboutRef, projectsRef, contactRef }) => {
  const [scrollAbout, setScrollAbout] = useState(null);
  const [scrollProjects, setScrollProjects] = useState(null);
  const [scrollContact, setScrollContact] = useState(null);

  useEffect(() => {
    setScrollAbout(aboutRef.current);
    setScrollProjects(projectsRef.current);
    setScrollContact(contactRef.current);
  }, [aboutRef, projectsRef]);

  return (
    <nav className="navbar-nav">
      <img className="logo" src="/images/Logo.png" height="72px" />
      <ul className="navbar-ul">
        <li className="navbar-li" onClick={() => scrollAbout.scrollIntoView({ behavior: "smooth" })}>
          <span className="list-number">01.</span>About
        </li>
        <li className="navbar-li" onClick={() => scrollProjects.scrollIntoView({ behavior: "smooth" })}>
          <span className="list-number">02.</span>Projects
        </li>
        <li className="navbar-li" onClick={() => scrollContact.scrollIntoView({ behavior: "smooth" })}>
          <span className="list-number">03.</span>Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
