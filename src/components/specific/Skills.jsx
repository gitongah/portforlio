import React from "react";
import Navigation from "./Navigation";

const Skills =()=>{
  return(
    <section className="skills" id="skills">
          <div className="title reveal">
            <h2 className="section-title"> My Skills</h2>
          </div>
          <div className="content">
            <div className="column col-left reveal">
              <h2 className="content-title"> My Skills and Experience</h2>
              <p>
                Proactive and personable aspiring Entrepreneur with a vision of creating ideas that solve real world problems by 
                working with clients to understand their requirements and translate them to detailed technology solutions.
              </p>
            </div>
            <div className="column col-right reveal">
              <div className="bar">
                <div className="info">
                  <span>HTML</span>
                  <span>95%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>JavaScript</span>
                  <span>81%</span>
                </div>
                <div className="line javascript"></div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>RactJS</span>
                  <span>70%</span>
                </div>
                <div className="line react"></div>
              </div>
            </div>
          </div>
        </section>
  );
};
export default Skills;