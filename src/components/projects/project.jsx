import React from "react";
import "./project.css";
import image from "../../assets/portfolio photo.png";
import image2 from "../../assets/portfolio photo2.png";
import { IoCaretForwardSharp } from "react-icons/io";
import { useState } from "react";
const Project = () => {
  const [hover, setHover] = useState(0);

  return (
    <section id="projects">
      <h2>My Recent projects</h2>
      <div
        className="card"
        onMouseLeave={() => {
          setHover(0);
        }}
        onMouseEnter={() => {
          setHover(1);
        }}
      >
        <div className={hover === 1 ? "lines add" : "lines"}></div>
        <div className={hover === 1 ? "images add" : "images"}>
          <img src={image} alt="Project photo" />
        </div>
        <div className="info">
          <div className="detail">
            <div className="readme">
              <div className="lists">
                <ul>
                  <h3>Technology Used</h3>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>MySQL</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </div>

              <div className="description">
                <p>
                  This is an website which represents simple product adding in
                  Ecommerce websites. Front end Is simple, most of work is done
                  at backend. I have followed OOP approach using MVC
                  architecture without any frameworks.
                </p>
              </div>
            </div>

            <div className="btns">
              <a
                href="https://github.com/xerpa43/project"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://angngimalama.000webhostapp.com/"
                className="btn btn-primary"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card"
        onMouseLeave={() => {
          setHover(0);
        }}
        onMouseEnter={() => {
          setHover(2);
        }}
      >
        <div className={hover === 2 ? "lines add" : "lines"}></div>
        <div className={hover === 2 ? "images add" : "images"}>
          <img src={image2} alt="Project photo" />
        </div>
        <div className="info">
          <div className="detail">
            <div className="readme">
              <div className="lists">
                <ul>
                  <h3>Technology Used</h3>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </div>

              <div className="description">
                <p>
                  This is a static template of Ecommerce.The main focus being in the frontend. I have only used technologies
                   mentioned above to create this. It doesn't use any framework
                </p>
              </div>
            </div>

            <div className="btns">
              <a
                href="https://github.com/xerpa43/ecomwebsite"
                className="btn"
                target="_blank"
              >
                Code
              </a>
              <a className="btn btn-primary disable">Live</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
