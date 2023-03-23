import React from "react";
import { BsDiscord } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="Footer-Logo">
        Abderrahmane Abouarrouche
      </a>
      <ul className="Permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="Footer-Socials">
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <AiFillGoogleCircle />
        </a>
        <a href="https://Discord.com" target="_blank" rel="noreferrer">
          <BsDiscord />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>

      <div className="Footer-Copyright">
        <small>&copy; Abderrahmane Abouarrouche. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
