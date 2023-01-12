import React from "react";
import "./nav.css";
import { useState } from "react";
import logo2 from "../../assets/final1.png";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo2} alt="MYlogo" className="logo-image" />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActive("#contact");
        }}
        className={active === "#contact" ? "active" : ""}
      >
        Contact
      </a>
      <a
        href="#about"
        onClick={() => {
          setActive("#about");
        }}
        className={active === "#about" ? "active" : ""}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => {
          setActive("#projects");
        }}
        className={active === "#projects" ? "active" : ""}
      >
        Projects
      </a>
      <a href=""></a>
    </nav>
  );
};

export default Nav;
