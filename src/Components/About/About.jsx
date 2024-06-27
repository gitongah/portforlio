import React from "react";
import './About.css'
import meAbout from "../../assets/mbaabu1.jpeg";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="Creator in About Section" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <icon className="about__icon">
                <FaAward />
              </icon>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <icon className="about__icon">
                <FaUsers />
              </icon>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className="about__card">
              <icon className="about__icon">
                <FaTasks />
              </icon>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p> 
            Born and raised in Nairobi Kenya. I am in love with technology but when I am not behind a computer I like being
             outside with the nature. I love doing outdoor activities like going for a run, hiking, and mountain biking, anything
             just to keep my body active and engaged.
          </p>

          <a href="#contact" className="btn btn-primary about__btn">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;