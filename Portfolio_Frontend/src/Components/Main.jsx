import React from "react";
import NavBar from "./TopNavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Expirience from "./WorkExpirience/Expirience";
import Skills from "./Skills/Skills";

export default function Main() {
  return (
<<<<<<< Updated upstream
    <>
      <NavBar />
      <AboutMe />
      <Education />
      <Expirience />
      <Projects />
    </>
=======
    <div className="general_layout">
      <div className="navigation_section">
        <Navigation />
      </div>
      <div className="content_section">
        <AboutMe />
        <Education />
        <Expirience />
        <Projects />
        <Skills />
      </div>
    </div>
>>>>>>> Stashed changes
  );
}
