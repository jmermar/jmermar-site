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
        <h1 className="menuElement">José Meroño's Homepage</h1>
        <nav>
          <div className="">
            <Link to="/about" className="col nav-btn menuElement">
              About
            </Link>
            <Link to="/" className="col nav-btn menuElement">
              Projects
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
