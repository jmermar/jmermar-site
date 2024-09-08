import "../style/main.less";
import ProjectPreview from "../components/ProjectPreview";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import RasterizersProject from "../data/projects/RasterizersProject";
import VulkanRasterProject from "../data/projects/VulkanRasterProject";
import Sidebar from "../components/Sidebar";
import VulkanTerrainProject from "../data/projects/VulkanTerrainProject";
import FbmWaterProject from "../data/projects/FbmWaterProject";

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
            <p>
              {" "}
              Here I would post project in which I've been working and I think
              that are worth noticing.
            </p>
            <p>
              Most of them are related to computer graphics yet not being games
              at all.
            </p>
          </article>
          <ProjectPreview project={FbmWaterProject} />
          <ProjectPreview project={VulkanTerrainProject} />
          <ProjectPreview project={VulkanRasterProject} />
          <ProjectPreview project={RasterizersProject} />
        </article>
      </div>
    </>
  );
}

export default Projects;
