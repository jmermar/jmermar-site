import "../style/main.less";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { ProjectTemplate } from "../data/templates/ProjectTemplate";
import RasterizersProject from "../data/projects/RasterizersProject";
import WebCraftGame from "../data/projects/WebcraftGame";
import { useParams } from "react-router-dom";
import VulkanRasterProject from "../data/projects/VulkanRasterProject";
import Sidebar from "../components/Sidebar";
import VulkanTerrainProject from "../data/projects/VulkanTerrainProject";
import FbmWaterProject from "../data/projects/FbmWaterProject";
import SnakeGame from "../data/projects/SnakeGame";
import AABlocks from "../data/projects/AABlocks";

const ProjectMaps: { [key: string]: ProjectTemplate } = {
  "3d-rasterizers": RasterizersProject,
  webcraft: WebCraftGame,
  "vulkan-3d-renderer": VulkanRasterProject,
  "vulkan-terrain-renderer": VulkanTerrainProject,
  "fbm-water": FbmWaterProject,
  snakegame: SnakeGame,
  aablocks: AABlocks,
};

function Project() {
  const params = useParams();
  const data = ProjectMaps[params.id as string];

  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <article className="page-project">
          <h3>{data.title}</h3>
          
        </article>
      </div>
    </>
  );
}

export default Project;
