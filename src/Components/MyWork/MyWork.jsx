import React from "react";
import "./MyWork.css";
import cover1 from "../../assets/bookSearch.png";
import cover2 from "../../assets/noteTaker.png";
import cover3 from "../../assets/bootPrint.png";
import cover4 from "../../assets/employeeTracker.png";
import cover5 from "../../assets/jsCalculator.png";
import cover6 from "../../assets/typingSpeed.png";

// IMAGES FOR PRIVATE USE ONLY (NO CREATIVE COMMONS)

const data = [
  {
    id: 1,
    image: cover1,
    title: "Book Search",
    github: "https://github.com/gitongah/BookSearchEngine",
    demo: "https://booksearchengine-jtwi.onrender.com",
  },
  {
    id: 2,
    image: cover2,
    title: "Note Taker",
    github: "https://github.com/gitongah/Notes-taker",
    demo: "https://notes-taker-2oa4.onrender.com",
  },
  {
    id: 3,
    image: cover3,
    title: "Boot Print",
    github: "https://github.com/ZachariahKB/bootPrint",
    demo: "https://project-3-il5t.onrender.com",
  },
  {
    id: 4,
    image: cover4,
    title: "Employee Tracker",
    github: "https://github.com/gitongah/Employee-Tracker",
    demo: "https://drive.google.com/file/d/1U1xkw_nY7vJrgEuaTRGMa9xFS4EJLRCc/view",
  },
   {
    id: 5,
    image: cover5,
    title: "A simple Calculator",
    github: "https://github.com/gitongah/Calculator_JavaScript",
    demo: "https://gitongah.github.io/Calculator_JavaScript/",
  },
  {
    id: 6,
    image: cover6,
    title: "Typing Speed",
    github: "https://github.com/gitongah/Typing-Speed",
    demo: "https://gitongah.github.io/Typing-Speed/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;