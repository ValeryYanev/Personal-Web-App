import React from "react";

import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <span className="intro">hello, my name is</span>
        <p className="name">Valeri Yanev</p>
        <p className="position">software web developer</p>
        <div className="description">
          <p className="description-text">
            I am а fullstack web developer, passionate about building and designing web apps. I use html, css and
            javascript, plus different frameworks to get the desired results. In my free time I enjoy listening to
            music, walking in nature and socializing both in person and online!
          </p>
          <img className="bitmoji" src="/images/bitmoji.png" />
        </div>

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
