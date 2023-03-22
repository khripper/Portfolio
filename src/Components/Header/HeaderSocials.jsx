import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="HeaderSocials">
      <a href="https://google.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://google.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://google.com" target="_blank">
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
