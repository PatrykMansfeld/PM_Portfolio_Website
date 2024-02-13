// import React from "react";

function AboutMe() {
  return (
    <div className="AboutMeBox">
      <div className="AboutMeLeft">
        <div className="NameBox">
          <h1 className="AboutMeName">Patryk Mansfeld</h1>
          <h1 className="AboutMeTitle">Junior Software Developer</h1>
        </div>
        <p className="AboutMeParagraph">
          I am a graduate of Collegium Da Vinci, specializing in Computer
          Science.
          <br />
          My area of expertise lies mainly in web and mobile applications.
          <br />
          I am particularly fascinated by crafting intricate graphical
          interfaces for applications, as well as websites.
          <br />
          I possess a calm demeanor when problem-solving and am committed to
          continuously learning new skills.
          <br />
          My goal is to enhance my programming abilities to create increasingly
          superior applications.
        </p>
      </div>
      <div className="AboutMeRight">
        <img className="AboutMePicture" src="src\assets\ProfilePicture.png" alt="123" />
      </div>
    </div>
  );
}

export default AboutMe;
