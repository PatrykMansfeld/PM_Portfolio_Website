import React from "react";

function Navigation() {
  return (
    <div className="TopBar">
      <div className="Logo">
        {/* <img className="LogoPicture" src="src\assets\Logo.png" alt="Logo" /> */}
      </div>

      <div className="NavBarLine">
        <ul className="NavBarList">
          <li className="NavBarListElement">About Me</li>
          <li className="NavBarListElement">Education</li>
          <li className="NavBarListElement">Work Expirence</li>
          <li className="NavBarListElement">My Projects</li>
          <li className="NavBarListElement">Links</li>
          <li className="NavBarListElement">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;