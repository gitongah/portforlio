import React from "react";
import './Hero.css'
import Me from "../../assets/kato1.jpeg";
import HeroSocials from "./HeroSocials.jsx";
function Hero() {
  return (
    <>
      <header id="header">
        <div className="container header__container">
          <div>
            <div className="me">
              <img src={Me} alt="image of mbaabu" />
            </div>
            <HeroSocials/>
             <h2 className="heading">Welcome to Edwin Mbaabu's Portfolio</h2>
              <span className="intro">Hello I am Mbaabu Gitonga a software Engineer, Aspiring Entrepreneur
                with a vission of solving real world problems by using Design thinking. I would love to conect with people 
                who have the same mindset as I do. Feel free to contact me and lets have a chart.
              </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;;