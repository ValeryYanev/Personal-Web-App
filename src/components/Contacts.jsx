import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contacts.css";

const Contacts = ({ contactRef }) => {
  const [emailElement, setEmailElement] = useState(false);
  const [linkedinElement, setLinkedinElement] = useState(false);
  const [githubElement, setGithubElement] = useState(false);

  return (
    <div ref={contactRef} className="contact-section">
      <ul className="contact-list">
        <Link onClick={() => window.open("mailto:valeri.t.yanev@gmail.com")}>
          <li
            className="contact-single-list"
            onMouseEnter={() => setEmailElement(true)}
            onMouseLeave={() => setEmailElement(false)}
          >
            <img src="/svg/gmail.svg" />
            <span>Email</span>
          </li>
        </Link>
        <Link to="https://www.linkedin.com/in/valeri-yanev-65bbb9277/" target="blank" rel="noopener">
          <li
            className="contact-single-list"
            onMouseEnter={() => setLinkedinElement(true)}
            onMouseLeave={() => setLinkedinElement(false)}
          >
            <img src="/svg/linkedin.svg" />
            <span>Linkedin</span>
          </li>
        </Link>
        <Link to="https://github.com/valeriYanev01" target="blank" rel="noopener">
          <li
            className="contact-single-list"
            onMouseEnter={() => setGithubElement(true)}
            onMouseLeave={() => setGithubElement(false)}
          >
            <img src="/svg/github2.svg" />
            <span>Github</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Contacts;
