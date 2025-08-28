import "../style/main.less";
import ProjectPreview from "../components/ProjectPreview";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import VulkanRasterProject from "../data/projects/VulkanRasterProject";
import Sidebar from "../components/Sidebar";
import WebCraftGame from "../data/projects/WebcraftGame";
import FbmWaterProject from "../data/projects/FbmWaterProject";
import AABlocks from "../data/projects/AABlocks";

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
      <div className="content">
        <Sidebar />
        <article className="page-projects">
          <article className="introduction">
            <h3>Peronal projects</h3>
            <p>These are some of the projects in which I've worked and that are public in my Github.</p>
          </article>
          <ProjectPreview project={FbmWaterProject} />
          <ProjectPreview project={AABlocks} />
          <ProjectPreview project={VulkanRasterProject} />
          <ProjectPreview project={WebCraftGame} />
        </article>
      </div>
    </>
  );
}

export default Projects;
