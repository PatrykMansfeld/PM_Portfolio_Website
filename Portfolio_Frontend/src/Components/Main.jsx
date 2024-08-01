// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Timeline from "./Timeline/Timeline";
import Contact from "./Contact/Contact";
import LandingPage from "./LandingPage/LandingPage";

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
