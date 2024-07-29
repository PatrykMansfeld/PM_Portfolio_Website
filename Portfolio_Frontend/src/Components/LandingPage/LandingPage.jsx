import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LP-Container">
      <div className="Initials">
        <h1>
          Patryk <br /> Mansfeld
        </h1>
        <h1>Fullstack Developer</h1>
      </div>
      <div className="LP-AboutMe">
        <Link to="/aboutme" className="aboutme-link">
          <h1>About Me</h1>
        </Link>
      </div>
      <div className="LP-Projects">
        <Link to="/projects" className="projects-link">
          <h1>Projects</h1>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
