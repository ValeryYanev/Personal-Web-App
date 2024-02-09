import React from "react";

import "./About.css";
import { Link } from "react-router-dom";

const About = ({ aboutRef }) => {
  return (
    <>
      <div id="about" className="about" ref={aboutRef}>
        <span className="intro">hello, my name is</span>
        <p className="name">Valeri Yanev</p>
        <p className="position">software web developer</p>
        <div className="description">
          <p className="description-text">
            I am а fullstack web developer, passionate about building and designing web apps. I use html, css and
            javascript, plus different frameworks to get the desired results.
          </p>

          <br />
          <img className="bitmoji" src="/images/bitmoji.png" />
        </div>

        <span className="email-container">
          <span className="email-container-text">get in touch: &rarr; </span>
          <Link onClick={() => window.open("mailto:valeri.t.yanev@gmail.com")}>
            <span className="email-contact">valeri.t.yanev@gmail.com</span>
          </Link>
        </span>

        <div className="skills">
          <p className="skills-stack">my skills stack:</p>
          <div className="skills-frontend">
            <p className="skills-fe-para">frontend:</p>
            <ul className="fe">
              <li>
                <p>html</p>
                <img src="/svg/html.svg" />
              </li>
              <li>
                <p>css</p>
                <img src="/svg/css.svg" />
              </li>
              <li>
                <p>js</p>
                <img src="/svg/js.svg" />
              </li>
              <li>
                <p>python</p>
                <img src="/svg/python.svg" />
              </li>
              <li>
                <p>react</p>
                <img src="/svg/react.svg" />
              </li>
            </ul>
          </div>

          <div className="skill-backend">
            <p className="skills-be-para">backend:</p>
            <ul className="be">
              <li>
                <p>nodejs</p>
                <img src="/svg/nodejs.svg" />
              </li>
              <li>
                <p>mongodb</p>
                <img src="/svg/mongodb.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
