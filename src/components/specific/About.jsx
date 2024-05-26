import React from "react";

const About = () => {
  return (
    <div className="about-section">
      <div className="title reveal">
        <h2 className="section-title">About Mbaabu</h2>
      </div>
      <div className="content">
        <div className="column col-left reveal">
          <div className="img-card">
            {/* Uncomment and add the correct path to your image */}
            {/* <img src={require('../images/kato.jpeg')} alt="pic of mbaabu" /> */}
          </div>
        </div>
        <div className="column col-right reveal">
          <h2 className="content-title">Hey There! I'm Edwin Mbaabu</h2>
          <p className="paragraph-text">
            Born and raised in Nairobi, Kenya. I am in love with technology, but when I am not behind a computer, I like being
            outside with nature. I love doing outdoor activities like going for a run, hiking, and mountain biking, anything
            just to keep my body active and engaged.
          </p>
          <a href="/skills" className="btn">See more</a>
        </div>
      </div>
    </div>
  );
}; 

export default About;
