import React from "react";

import "./About.css";
import { Link } from "react-router-dom";

const About = ({ aboutRef }) => {
  return (
    <>
      <div id="about" className="about" ref={aboutRef}>
        <span className="intro">Hello, my name is</span>
        <p className="name">Valeri Yanev</p>
        <p className="position">software web developer</p>
        <div className="description">
          <p className="description-text">
            I'm front-end web developer who loves crafting captivating web experiences. With expertise in HTML, CSS, and
            JavaScript, I'm all about using different frameworks to make things shine. <br />
            Driven by a passion for innovation and problem-solving, I combine creative thinking with technical expertise
            to deliver results that exceed expectations.
          </p>

          <br />
          <img className="bitmoji" src="/images/bitmoji.png" />
        </div>
        <br />
        <br />

        <span className="email-container">
          <span className="email-container-text">Get in touch: &rarr; </span>
          <Link onClick={() => window.open("mailto:valeri.t.yanev@gmail.com")}>
            <span className="email-contact">valeri.t.yanev@gmail.com</span>
          </Link>
        </span>

        <div className="skills">
          <p className="skills-stack">My skill stack:</p>
          <div className="skills-frontend">
            <ul className="fe">
              <li>
                <p>Html</p>
                <img src="/svg/html.svg" />
              </li>
              <li>
                <p>Css</p>
                <img src="/svg/css.svg" />
              </li>
              <li>
                <p>JavaScript</p>
                <img src="/svg/js.svg" />
              </li>
              <li>
                <p>TypeScript</p>
                <img src="/svg/typescript.svg" />
              </li>
              <li>
                <p>React</p>
                <img src="/svg/react.svg" />
              </li>
              <li>
                <p>API's</p>
                <img src="/svg/api.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
