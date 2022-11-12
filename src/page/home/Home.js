import React from "react";
import Hero from "../../components/hero-section/Hero";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import ProjectOverview from "../overview/ProjectOverview";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
      <ProjectOverview />
      <Contact />
    </div>
  );
};

export default Home;
