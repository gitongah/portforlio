import React from "react";

const Home =()=>{
  return(
    <section className="main" id="main">
        <div className="content">
          <span className="circle-image">
            {/* <img src={require('../images/kato1.jpeg')} alt="pic of mbaabu"></img> */}
          </span>
          <h2>Welcome to Mbaabu Gitonga</h2>
          <span className="intro">Hello I am Mbaabu Gitonga a software Engineer, Aspiring Entrepreneur
            with a vission of solving real world problems by using Design thinking. I would love to conect with people 
            who have the same mindset as I do. Feel free to contuct me and lets have a chart.
          </span>
          <div className="animated-text">
            <h3>Software Engineer</h3>
            <h3>Design Thinker</h3>
            <h3>Aspiring Entrepreneur</h3>
          </div>
          <a href="/project" className="btn"> See My Work</a>
          <div className="media-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </section>

  );
};

export default Home;
