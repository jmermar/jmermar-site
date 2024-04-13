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
        <h1 className="pixelify-font centered">José Meroño Martínez's</h1>
        <h2 className="pixelify-font centered">Personal site</h2>
        <nav>
          <div className="row centered">
            <Link to="/" className="col nav-btn pixelify-font">
              About
            </Link>
            <div className="separator"></div>
            <Link to="/projects" className="col nav-btn pixelify-font">
              Projects
            </Link>
          </div>
        </nav>
        <div className="header-separator centered"></div>
      </div>
    </header>
  );
}
