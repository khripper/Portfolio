import React from "react";
import { useRef } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gkcoq0c",
        "template_v66pz0p",
        form.current,
        "ieTqgGCw6RZtgCkHI"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been submitted!");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred while submitting your message.");
        }
      );
    e.target.reset();
  };
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container Contact-Container">
        <div className="Contact-Options">
          <article className="Contact-Option">
            <MdOutlineMailOutline className="Contact-Option-Icon" />
            <h4>Email</h4>
            <h5>khabdo2901@gmail.com</h5>
            <a href="mailto:khabdo2901@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="Contact-Option">
            <BsMessenger className="Contact-Option-Icon" />
            <h4>Messenger</h4>
            <h5>Abdo Wins</h5>
            <a href="https://www.google.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="Contact-Option">
            <BsDiscord className="Contact-Option-Icon" />
            <h4>Discord</h4>
            <h5>KH-RIPPER#2729</h5>
            <a href="https://discord.gg/QB7qszaY" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
