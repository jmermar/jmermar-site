import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

export default function Header() {
  return (
    <header>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="header-content">
        <h1 className="menuElement">
          <Link to="/about">
            <strong>jmermar's</strong> Homepage
          </Link>
        </h1>

        <nav>
          <Link to="/about" className="col nav-btn menuElement">
            <div>About</div>
          </Link>
          <Link to="/" className="col nav-btn menuElement">
            <div>Projects</div>
          </Link>
          <Link to={resume} target="_blank" className="col nav-btn menuElement">
            <div>Resume</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
