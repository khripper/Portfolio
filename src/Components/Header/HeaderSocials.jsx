import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="HeaderSocials">
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
