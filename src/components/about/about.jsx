import React from "react";
import "./about.css";
import port from "../../assets/porto.jfif";
const about = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="aboutimage">
          <img src={port} alt="portfolio" />
        </div>
        <div className="about-me">
          <div className="about-me info">
            <p>
              Hi There <br />I am an entry level developer and{" "}
              <span className="Red"> Red Hat System Administrator </span> . I
              have passion for creating websites and constantly strive to
              improve my skills. I am able to complete projects independently
              with a high level of efficiency. I am excited to bring my skills
              and experience to new challenges and opportunities{" "}
            </p>
          </div>
        </div>
        <div className="about-content"></div>
      </div>
    </section>
  );
};

export default about;
