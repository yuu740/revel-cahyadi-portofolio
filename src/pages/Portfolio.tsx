import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Achievement from "../components/sections/Achievement";
import Contact from "../components/sections/Contact";
import Education from "../components/sections/Education.tsx";

const Portfolio: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Achievement />
      <Contact />
    </>
  );
};

export default Portfolio;
