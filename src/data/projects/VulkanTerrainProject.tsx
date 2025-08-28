import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/terrain/banner.png";
import "swiper/css";

const projectPath = "https://github.com/jmermar/Vulkan-Terrain-Renderer";

const VulkanTerrainProject: ProjectTemplate = {
  id: "vulkan-terrain-renderer",
  title: "Vulkan Terrain Renderer",
  tech: "C++, Vulkan, SDL2",
  thumbNailSrc: image1,
  previewText: "Procedural terrain renderer with dynamic LOD and Screen Space Reflection (SSR) for water simulation.",
  link: projectPath
};

export default VulkanTerrainProject;
