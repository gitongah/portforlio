import React from "react";

const Contact =()=>{
  return(
  <section className="contact" id="contact">
    <div className="title">
      <h2 className="section-title"> Contact Me</h2>
    </div>
    <div className="content">
      <div className="row">
        <div className="card reveal">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="info">
            <h3>Address</h3>
            <span>208 Rushclif ct, El Dorado Hills, CA</span>
          </div>
        </div>
        <div className="card reveal">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <a href="tel:+1(510)506-6172">
            <div className="info">
              <h3>Phone</h3>
              <span>+1 510 506 6172 </span>
            </div>
          </a>
          
        </div>
        <div className="card reveal">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <a href="mailto:mbaabugitonga@gmail.com">
            <div className="info">
              <h3>Email Address</h3>
              <span>mbaabugitonga@gmail.com</span>
            </div>
          </a>
        </div>
        <div className="card reveal">
          <div className="contact-icon">
            <i className="fas fa-globe"></i>
          </div>
          <div className="info">
            <h3>Website</h3>
            <span>mywebsite.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Contact;