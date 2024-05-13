import "../style/main.less";
import ProjectPreview from "../components/ProjectPreview";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import RasterizersProject from "../data/projects/RasterizersProject";
import WebCraftProject from "../data/projects/WebcraftProject";
import VulkanRasterProject from "../data/projects/VulkanRasterProject";
import Sidebar from "../components/Sidebar";

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
          <ProjectPreview project={VulkanRasterProject} />
          <ProjectPreview project={RasterizersProject} />
          <ProjectPreview project={WebCraftProject} />
        </article>
      </div>
    </>
  );
}

export default Projects;
