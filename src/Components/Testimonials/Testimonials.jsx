import React from "react";
import AVTM from "../../Assets/AVT-MALE.png";
import AVTF from "../../Assets/AVT-FEMALE.png"
import "./Testimonials.scss";

import {  Pagination} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTF,
    name: "Liza Martinez",
    review:
      "Abderrahmane is a highly skilled front-end web developer who brings creativity and expertise to every project. His proficiency in React, HTML, CSS, JavaScript, and Bootstrap ensures top-notch and responsive user interfaces. Working with him was a pleasure, as he consistently delivered high-quality code and met project deadlines. I highly recommend him for any front-end development needs.",
  },
  {
    avatar: AVTM,
    name: "Jhon Beener",
    review:
      "I had the pleasure of collaborating with Abderrahmane on a web development project, and I must say his skills are exceptional. His knowledge of React and front-end technologies, combined with his attention to detail, resulted in a visually stunning and smooth user experience. He was responsive, easy to work with, and delivered outstanding results. I look forward to working with him again in the future.",
  },
  {
    avatar: AVTM,
    name: "Ahmed Zaid",
    review:
      "Abderrahmane's expertise in front-end development, including React, HTML, CSS, JavaScript, and Bootstrap, is truly impressive. He excels in translating design concepts into exceptional, user-friendly websites. With his meticulous code structure, problem-solving abilities, and commitment to quality, he is an invaluable asset to any development team. Collaborating with Abderrahmane was a pleasure, and I highly recommend him for front-end web projects.",
  },
];

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h5 className="white">Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
        className="container Testimonials-Container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="Testimonial">
              <div className="Client-Avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="Client-Name">{name}</h5>
              <small className="Client-Review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
