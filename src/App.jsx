import React from "react";
import Header from "./Components/Header/Header.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import About from "./Components/About/About.jsx";
import Services from "./Components/Services/Services.jsx";
import Portfolio from "./Components/Portfolio/Porfolio.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Experience from "./Components/Experience/Experience.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
