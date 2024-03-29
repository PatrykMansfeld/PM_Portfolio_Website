import React from "react";

function AboutMe() {
  return (
    <div className="AboutMeBox">
      <div className="AboutMeLeft">
        <h1 className="AboutMeName">Patryk Mansfeld</h1>
        <h1 className="AboutMeTitle">Junior Software Developer</h1>
        <p className="AboutMeParagraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Sit vero voluptate quibusdam asperiores.
          <br />
          Nam tenetur deleniti unde corrupti aliquam repudiandae nobis illum?
          <br />
          Hic unde aperiam, ipsam error perspiciatis placeat eligendi.
        </p>
      </div>
      <div className="AboutMeRight">
        <img src="src\assets\ProfilePicture.png" alt="123" />
      </div>
    </div>
  );
}

export default AboutMe;
