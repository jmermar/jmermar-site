import "../style/main.less";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { ProjectTemplate } from "../data/templates/ProjectTemplate";
import RasterizersProject from "../data/projects/RasterizersProject";
import WebCraftProject from "../data/projects/WebcraftProject";
import { useParams } from "react-router-dom";
import VulkanRasterProject from "../data/projects/VulkanRasterProject";

const ProjectMaps: { [key: string]: ProjectTemplate } = {
  "3d-rasterizers": RasterizersProject,
  webcraft: WebCraftProject,
  "vulkan-3d-renderer": VulkanRasterProject,
};

function Project() {
  const params = useParams();
  const data = ProjectMaps[params.id as string];

  return (
    <>
      <Header />
      <div className="content">
        <div className="sidebar"></div>
        <article className="page-project">
          <h3>{data.title}</h3>
          <div className="project-content">{data.text}</div>
        </article>
      </div>
    </>
  );
}

export default Project;
