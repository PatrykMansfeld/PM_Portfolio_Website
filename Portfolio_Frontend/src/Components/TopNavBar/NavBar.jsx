// import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="TopBar">
      <div className="NavBar">
        <ul className="NavBarList">
          <li className="NavBarListElement"><Link to="/aboutme">About Me</Link></li>
          <li className="NavBarListElement"><Link to="/education">Education</Link></li>
          <li className="NavBarListElement"><Link to="/skills">Skills</Link></li>
          <li className="NavBarListElement"><Link to="/timeline">Timeline</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;