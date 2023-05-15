import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./Header.scss";
import Me from "../../Assets/Main-Me.png";
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Abderrahmane Abouarrouche</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="Me">
        <img src={Me} alt="Me" />
      </div>
      <a href="#Contact" className="Scroll-Down">
        Scroll Down
      </a>
      </div>
    </header>
  );
};

export default Header;
