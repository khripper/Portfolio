import React from "react";
import AVT from "../../Assets/Avatar.jpg";
import "./Testimonials.scss";

import {  Pagination} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVT,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ",
  },
  {
    avatar: AVT,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ",
  },
  {
    avatar: AVT,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ",
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
