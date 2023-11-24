import React from "react";
import "./Navbar.css";

const Navbar = ({ onClick }) => {
  return (
    <nav className="navbar-nav">
      <img className="logo" src="/images/Logo.png" height="72px" />
      <ul className="navbar-ul">
        <li className="navbar-li" onClick={onClick}>
          <span className="list-number">01.</span>About
        </li>
        <li className="navbar-li">
          <span className="list-number">02.</span>Projects
        </li>
        <li className="navbar-li">
          <span className="list-number">03.</span>Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
