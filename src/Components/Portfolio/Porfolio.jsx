import React from "react";
import IMG1 from "../../Assets/Portfolio-1.jpg";
import IMG2 from "../../Assets/Portfolio-2.jpg";
import IMG3 from "../../Assets/Portfolio-3.jpg";
import "./Portfolio.scss";

// ERRAY//

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 4,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 5,
    image: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 6,
    image: IMG3,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
];

const Porfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container Portfolio-Container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="Portfolio-Item">
              <div className="Portfolio-Item-Img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="Portfolio-Item-Cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Porfolio;
