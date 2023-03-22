import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Experience.scss";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      {/* FRONTEND */}
      <div className="container Experience-Container">
        <div className="Experience-Frontend">
          <h3>Frontend Developement</h3>
          <div className="Experience-Content">
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACKEND */}
        <div className="Experience-Backend">
          <h3>Backend Developement</h3>
          <div className="Experience-Content">
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="Experience-Details">
              <BsFillPatchCheckFill className="Experience-Details-Icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
