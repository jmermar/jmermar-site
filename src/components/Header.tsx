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
        <h1 className="menuElement">
          <Link to="/">
            <strong>jmermar's</strong> portfolio
          </Link>
        </h1>
      </div>
    </header>
  );
}
