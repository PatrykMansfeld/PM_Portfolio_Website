import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./TopNavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Timeline from "./Timeline/Timeline";

export default function Main() {
  return (
    <Router>
      <div className="general_layout">
        <div className="navigation_section">
          <NavBar />
        </div>
        <div className="content_section">
          <Routes>
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/" element={<AboutMe />} /> {/* This will be the default route */}
          </Routes>
        </div>
        <div>
          
        </div>
      </div>
    </Router>
  );
}