import React from "react";
import NavBar from "./TopNavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Expirience from "./WorkExpirience/Expirience";

export default function Main() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Education />
      <Expirience />
      <Projects />
    </>
  );
}
