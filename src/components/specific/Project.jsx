import React from "react";
import Navigation from "./Navigation";

//useEfect
//axios

const Project =()=>{
  return(
  <section className="work" id="work">
    <div className="title reveal">
      <h2 className="section-title"> My Work</h2>
    </div>
    <div className="content">
      <div className="card reveal">
        <div className="card-img">
          <img src="images/project.jpeg" alt="the first project"/>
        </div>
      </div>
      <div className="card reveal">
        <div className="card-img">
          <img src="images/analytics.jpeg" alt="the first project"/>
        </div>
      </div>
      <div className="card reveal">
        <div className="card-img">
          <img src="images/project3.jpeg" alt="the first project"/>
        </div>
      </div>
      <div className="card reveal">
        <div className="card-img">
          <img src="images/project4.jpeg" alt="the first project"/>
        </div>
      </div>
      <div className="card reveal">
        <div className="card-img">
          <img src="images/design thinking.jpeg" alt="the first project"/>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Project;