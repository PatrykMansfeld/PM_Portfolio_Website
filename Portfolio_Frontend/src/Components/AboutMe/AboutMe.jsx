// import React from "react";
import ProfilePicture from "../../assets/ProfilePicture.png";
// import SidePanelComponent from "../Reusable/SidePanelComponent";

function AboutMe() {
  return (
    <div className="AboutMeBox">
      <div className="ImgBox">
        <img
          className="profile_img"
          src={ProfilePicture}
          alt="ProfilePicture"
        />
      </div>
      <div className="AboutMeText">
        <h1 className="AboutMeName">Patryk Mansfeld</h1>
        <h1 className="AboutMeTitle">Junior Software Developer</h1>
        <p className="AboutMeParagraph">
          I am a junior software developer with a passion for programing and
          problem-solving. I am a quick learner and always eager to learn new
          technologies. I alos have a strong foundation in programming languages
          sucha as: JavaScript, Python, and Java. I have experience in
          developing web applications using React or Vue for frontend and
          Node.Js for backend. I am currently learning new technologies mainly
          TypeScript and Next.js. I am looking for a challenging role where I
          can apply my skills and grow as a developer.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
