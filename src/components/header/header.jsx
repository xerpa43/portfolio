import React from "react";
import "./header.css";
import { SlArrowDown } from "react-icons/sl";

import Btns from "./btns";
import Socials from "./socials";
import Anim from "./anim";
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <Anim />
        <Btns />
        <Socials />
        <a href="#about" className="scroll-down">
          <SlArrowDown size={30} />
        </a>
      </div>
    </header>
  );
};

export default Header;
