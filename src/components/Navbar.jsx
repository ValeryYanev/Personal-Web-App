import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src="/images/Logo.png" height="72px" />
      <ul>
        <li>
          <span className="list-number">01.</span>About
        </li>
        <li>
          <span className="list-number">02.</span>Projects
        </li>
        <li>
          <span className="list-number">03.</span>Stack
        </li>
        <li>
          <span className="list-number">04.</span>Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
