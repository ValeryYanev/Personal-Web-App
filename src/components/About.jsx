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
            javascript, and different frameworks to get the desired results. In my free time I enjoy listening to music,
            climbing and socializing both in person and online!
          </p>
          <img className="bitmoji" src="/public/images/bitmoji.png" />
        </div>
      </div>
    </>
  );
};

export default About;
