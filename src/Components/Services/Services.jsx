import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./Services.scss";

const Services = () => {
  return (
    <section id="Services">
      <h5 className="white">What I Offer</h5>
      <h2>Services</h2>
      <div className="container Services-Container">
        <article className="Service">
          <div className="Service-Head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="Service-List">
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>I specialize in creating captivating digital art.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>I'm a Canvas expert for impactful logos and designs.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>I design captivating websites using Figma.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>Responsive web design expert.</p>
            </li>
          </ul>
        </article>
        {/* ENF OF UX/ UI DESIGN */}
        <article className="Service">
          <div className="Service-Head">
            <h3>Web Development</h3>
          </div>
          <ul className="Service-List">
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>HTML pro creating impressive web experiences.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>CSS guru crafting stunning styles.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>JavaScript whiz building dynamic sites.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>TypeScript learner exploring new frontiers.</p>
            </li>
          </ul>
        </article>
        {/* END Second */}
        {/* <article className="Service">
          <div className="Service-Head">
            <h3>Content Creation</h3>
          </div>
          <ul className="Service-List">
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="Service-List-Icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
        {/* END THIRD */}
      </div>
    </section>
  );
};

export default Services;
