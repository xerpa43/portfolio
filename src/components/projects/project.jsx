import React from "react";
import "./project.css";
import image from "../../assets/portfolio photo.png";
import image2 from "../../assets/portfolio photo2.png";
import image3 from "../../assets/project3.png";
import image4 from "../../assets/project5.png";
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
                  <br/>
               It is a website for adding products just like E-commerce. It has been built using object-oriented programming (OOP) principles and a custom model-view-controller (MVC) architecture.
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
                Visit
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
                  This is a template of an E-commerce website. This is a static website created by using CSS, HTML and JavaScript only.
                 
                </p>
              </div>
            </div>

            <div className="btns">
              <a
                href="https://github.com/xerpa43/ecomwebsite"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>

              <a
                href="https://ecomwebsite-three.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Visit
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
          setHover(3);
        }}
      >
        <div className={hover === 3 ? "lines add" : "lines"}></div>
        <div className={hover === 3 ? "images add" : "images"}>
          <img src={image3} alt="Project photo" />
        </div>
        <div className="info">
          <div className="detail">
            <div className="readme">
              <div className="lists">
                <ul>
                  <h3>Technology Used</h3>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>

              <div className="description">
                <p>
                  It is a simple game which I have created to grasp the concepts of React Hooks. A random word is generated and People have to guess it.
                  <br/>
                </p>
              </div>
            </div>

            <div className="btns">
              <a
                href="https://github.com/xerpa43/game"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://game-roan-gamma.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
               Visit
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
          setHover(4);
        }}
      >
        <div className={hover === 4 ? "lines add" : "lines"}></div>
        <div className={hover === 4 ? "images add" : "images"}>
          <img src={image4} alt="Project photo" />
        </div>
        <div className="info">
          <div className="detail">
            <div className="readme">
              <div className="lists">
                <ul>
                  <h3>Technology Used</h3>
                  <li>NodeJS</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>JavaScript</li>

                </ul>
              </div>

              <div className="description">
                <p>
                  This website uses OpenAI API to generate response on given input. It uses CODE-DAVINCI-002 model which is trained to generate code, it can also do other general tasks but it might not be reliable
                </p>
              </div>
            </div>

            <div className="btns">
              <a
                href="https://github.com/xerpa43/openai"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://apibot-ten.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
