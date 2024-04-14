import "../style/main.less";
import ProjectPreview from "../components/ProjectPreview";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import RasterizersProject from "../data/projects/RasterizersProject";
import WebCraftProject from "../data/projects/WebcraftProject";

function Projects() {
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
      <div className="content page-projects">
        <ProjectPreview project={RasterizersProject}></ProjectPreview>
        <ProjectPreview project={WebCraftProject}></ProjectPreview>
      </div>
    </>
  );
}

export default Projects;
