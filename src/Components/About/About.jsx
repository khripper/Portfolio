import React from "react";
import "./About.scss";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import Me from "../../Assets/Main-Me.png";
const About = () => {
  return (
    <section id="About">
      <h5 className="white">Get To Know</h5>
      <h2>Me</h2>
      <div className="container About-Container">
        <div className="About-Me">
          <div className="About-Me-img">
            <img src={Me} alt="Me" />
          </div>
        </div>
        <div className="About-Content">
          <div className="About-Cards">
            <article className="About-Card">
              <FaAward className="About-icon" />
              <h5>experience</h5>
              <small>12+ Months FreeLancing</small>
            </article>
            <article className="About-Card">
              <FiUsers className="About-icon" />
              <h5>Clients</h5>
              <small>30+ World Wide</small>
            </article>
            <article className="About-Card">
              <BsFolderCheck className="About-icon" />
              <h5>Projects</h5>
              <small >20+ Completed</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              pariatur voluptas, alias qui animi, ad, eius a repellendus
              voluptatum aut quia accusamus sapiente consequuntur adipisci enim
              obcaecati est vel earum.
            </p>
            <a href="#Contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
