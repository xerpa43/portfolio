import React from "react";
import "./experience.css";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import tools from "../../assets/tools.png";
import design from "../../assets/design.png";

const experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience-container">
        <div className="skill">
          <div className="skills">
            <h5>Frontend</h5>
            <img src={frontend} alt="the" className="experience-image" />

            <article className="skills in">
              <h3>HTML, CSS</h3>
            </article>

            <article className="skills in">
              <h3>JavaScript</h3>
            </article>

            <article className="skills in">
              <h3>React</h3>
            </article>

            <article className="skills in">
              <h3>Webflow</h3>
            </article>
          </div>
        </div>
        <div className="skill">
          <h5>Backend</h5>
          <img src={backend} alt="the" className="experience-image" />

          <div className="skills">
            <article className="skills in">
              <h3>MySQL</h3>
            </article>

            <article className="skills in">
              <h3>PHP</h3>
            </article>
          </div>
        </div>

        <div className="skill">
          <h5>Tools</h5>
          <img src={tools} alt="the" className="experience-image" />

          <div className="skills">
            <article className="skills in">
              <h3>GitHub</h3>
            </article>
          </div>
        </div>
        <div className="skill">
          <h5>Design</h5>
          <img src={design} alt="the" className="experience-image" />

          <div className="skills">
            <article className="skills in">
              <h3>Figma</h3>
            </article>

            <article className="skills in">
              <h3>Photoshop</h3>
            </article>
              <article className="skills in">
              <h3>Adobe Illustrator</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
