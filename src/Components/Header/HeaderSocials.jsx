import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="HeaderSocials">
      <a
        href="https://www.linkedin.com/in/abderrahmane-abouarrouche-59a381230/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/khripper" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://discord.com/users/333657345290797057"
        target="_blank"
        rel="noreferrer"
      >
        <BsDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
