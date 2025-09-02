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
            <h3>Projects</h3>
            <p>Showcase of some of the projects I'm developed, all of them are public on my Github.</p>
          </article>
          <ProjectPreview project={AABlocks} />
          <ProjectPreview project={FbmWaterProject} />
          <ProjectPreview project={VulkanRasterProject} />
          <ProjectPreview project={WebCraftGame} />
        </article>
      </div>
    </>
  );
}

export default Projects;
