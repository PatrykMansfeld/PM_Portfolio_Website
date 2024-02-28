// import React from "react";
import Navigation from "./Navigation/Navigation";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Expirience from "./WorkExpirience/Expirience";

export default function Main() {
  return (
    <div className="general_layout">
      <div className="navigation_section">
        <Navigation />
      </div>
      <div className="content_section">
        <AboutMe />
        <Education />
        <Expirience />
        <Projects />
      </div>
    </div>
  );
}
  