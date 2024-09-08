import "../style/main.less";
import ProjectPreview from "../components/ProjectPreview";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import WebCraftGame from "../data/projects/WebcraftGame";
import Sidebar from "../components/Sidebar";
import SnakeGame from "../data/projects/SnakeGame";

function Games() {
  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: ["Droid Sans", "Comic Neue"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <article className="page-projects">
          <article className="introduction">
            <h3>Games made</h3>
            Hobby games that I like to make. Most of them very small.
          </article>
          <span></span>
          <ProjectPreview project={WebCraftGame} />
          <ProjectPreview project={SnakeGame} />
        </article>
      </div>
    </>
  );
}

export default Games;
