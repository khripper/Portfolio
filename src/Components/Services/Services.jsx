import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./Services.scss";

const Services = () => {
  return (
    <section id="Services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container Services-Container">
        <article className="Service">
          <div className="Service-Head">
            <h3>UI/UX Design</h3>
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
        </article>
        {/* ENF OF UX/ UI DESIGN */}
        <article className="Service">
          <div className="Service-Head">
            <h3>Web Development</h3>
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
        </article>
        {/* END Second */}
        <article className="Service">
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
        </article>
        {/* END THIRD */}
      </div>
    </section>
  );
};

export default Services;
