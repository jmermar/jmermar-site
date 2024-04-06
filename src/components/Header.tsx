import { Link } from "react-router-dom";

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
        <h1>
          <div className="centered">José Meroño Martínez</div>
        </h1>
        <h2>
          <div className="centered">Personal site</div>
        </h2>
        <nav>
          <div className="row centered">
            <Link to="/" className="col nav-btn">
              About
            </Link>
            <Link to="/projects" className="col nav-btn">
              Projects
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
