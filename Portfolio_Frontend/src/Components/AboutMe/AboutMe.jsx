// import React from "react";
import ProfilePicture from "../../assets/ProfilePicture.png";
import SidePanelComponent from "../Reusable/SidePanelComponent";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div>
        <SidePanelComponent VarLeft={"About Me"} />
      </div>
      <div className="center-box">
        <div className="about_me_box">
          <div className="AboutMeRight">
            <img
              className="profile_img"
              src={ProfilePicture}
              alt="ProfilePicture"
            />
          </div>
          <div className="AboutMeLeft">
            <h1 className="AboutMeName">Patryk Mansfeld</h1>
            <h1 className="AboutMeTitle">Junior Software Developer</h1>
            <p className="AboutMeParagraph">
              I am a junior software developer with a passion for coding and
              problem-solving. I am a quick learner and always eager to learn
              new technologies. I have a strong foundation in programming
              languages like JavaScript, Python, and Java. I have experience in
              developing web applications using React, Node.js, and Express. I
              am currently learning new technologies like TypeScript and
              Next.js. I am looking for a challenging role where I can apply my
              skills and grow as a developer.
            </p>
          </div>
        </div>
      </div>
      <div>
        <SidePanelComponent VarRight={"About Me"} />
      </div>
    </div>
  );
}

export default AboutMe;
