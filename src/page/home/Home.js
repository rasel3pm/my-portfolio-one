import React from "react";
import Hero from "../../components/hero-section/Hero";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import ProjectOverview from "../overview/ProjectOverview";
import Footer from "../../components/footer/Footer";
import Service from "../Services/Service";
import ProjectGalary from "../../components/portfolio/ProjectGalary";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
      <ProjectOverview />
      <Service />
      <ProjectGalary />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
