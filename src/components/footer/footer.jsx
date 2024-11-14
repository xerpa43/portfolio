import React from "react";
import "./footer.css";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import Logo from "../../assets/final.png";
const footer = () => {
  return (
    <footer>
      <div className="footer-socials">
      
        <a target="_blank" href="https://github.com/xerpa43">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/xerpa43/">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-logo">
        <img src={Logo} alt="images_for-footer" />
      </div>
    </footer>
  );
};

export default footer;
