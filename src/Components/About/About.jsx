import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p> Born and raised in Nairobi Kenya. I am in love with technology but when I am not behind a computer I like being
              outside with the nature. I love doing outdoor activities like going for a run, hiking, and mountain biking, anything
              just to keep my body active and engaged.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Postgress SQL</p> <hr style={{ width: "50%" }} />
            </div>            <div className="about-skill">
              <p>Express.js</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p> <hr style={{width:"50%"}}/>
            </div>
            <div className="about-skill">
              <p>GraphQL</p> <hr style={{width:"50%"}}/>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>3</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>4+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About