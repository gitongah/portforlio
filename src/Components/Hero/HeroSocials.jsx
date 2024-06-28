import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeroSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/gitongah" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/edwin-mbaabu-a07b7514a/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeroSocials;