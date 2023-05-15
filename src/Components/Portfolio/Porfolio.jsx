import React from "react";
import IMG1 from "../../Assets/Gzones.png";
import IMG2 from "../../Assets/Portfolio-M.png";
import "./Portfolio.scss";

// ERRAY//

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Responsive website  and fostering interactive experiences.",
    github: "https://github.com/khripper/GZONE.git",
    demo: "https://gszone.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Responsive Portfolio Website with interactive Interface",
    github: "https://github.com/khripper/GZONE.git",
    demo: "https://abderrahmane-dev.vercel.app/",
  },


];

const Porfolio = () => {
  return (
    <section id="Portfolio">
      <h5 className="white">My Recent Work</h5>
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
