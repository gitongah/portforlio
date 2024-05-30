import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/mbaabu1.jpeg'

const About = () => {
  const skills = [
    { name: 'HTML & CSS', width: '90%' },
    { name: 'React', width: '80%' },
    { name: 'Node.js', width: '99%' },
    { name: 'PostgreSQL', width: '80%' },
    { name: 'Express.js', width: '88%' },
    { name: 'MongoDB', width: '75%' },
    { name: 'GraphQL', width: '81%' }
  ];
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Mbaabu</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className='column col-left revel'>
          <div className="img-card">
            <img src={profile_img} alt="an image of mbaabu" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-paragraph">
            <p> Born and raised in Nairobi Kenya. I am in love with technology but when I am not behind a computer I like being
              outside with the nature. I love doing outdoor activities like going for a run, hiking, and mountain biking, anything
              just to keep my body active and engaged.
            </p>
          </div>

          <div>
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <hr style={{ width: skill.width }} />
              </div>
            ))}
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