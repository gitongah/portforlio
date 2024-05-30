import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div className='hero' id='home'>

      <img src={profile_img} alt="picture of mbaabu gitonga"/>
      <h1><span> I am Edwin Mbaabu,</span> a Full Stack Web Developer basesd in California</h1>
      <p>Hello I am Mbaabu Gitonga a software Engineer, Aspiring Entrepreneur
        with a vission of solving real world problems by using Design thinking. I would love to conect with people 
        who have the same mindset as I do. Feel free to contuct me and lets have a chart.
        </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
  );
};

export default Hero;
