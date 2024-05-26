import React from "react";

const Services = ()=>{
  return(
     <section className="services" id="services">
        <div className="title reveal">
          <h2 className="section-title"> My Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi maxime, 
            ipsam voluptate nam repellat magni? Voluptatibus eos beatae perspiciatis atque 
            reprehenderit tempore, nesciunt nostrum ullam incidunt, dolorum similique reiciendis.
          </p>
        </div>
        <div className="content">
          <div className="card reveal">
            <div className="service-icon">
             
              {/* // <i className="fas fa-palette"></i> */}
            </div>
            <div className="info">
              <h3>Design Thinking</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta corrupti ratione ullam, 
                eveniet doloribus.
              </p>
            </div>
          </div>
          <div className="card reveal">
            <div className="service-icon">
              <i className="fas fa-file-code"></i>
            </div>
            <div className="info">
              <h3>Software Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta corrupti ratione ullam, 
                eveniet.
              </p>
            </div>
          </div>
          <div className="card reveal">
            <div className="service-icon">
              <i className="fas fa-object-group"></i>
            </div>
            <div className="info">
              <h3>Motion Graphics Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta corrupti ratione ullam, 
                eveniet doloribus provident est unde consectetur.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Services;