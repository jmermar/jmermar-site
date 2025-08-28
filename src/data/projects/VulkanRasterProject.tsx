import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/banner.png";
import "swiper/css";

const projectPath = "https://github.com/jmermar/vkRaster";

const VulkanRasterProject: ProjectTemplate = {
  id: "vulkan-3d-renderer",
  title: "Vulkan Forward+ Renderer",
  tech: "C++, Vulkan, SDL2",
  thumbNailSrc: image1,
  previewText: "3D Renderer using Vulkan and C++, implementing a Forward+ rendering pipeline with clustered shading.",
  link: projectPath
};

export default VulkanRasterProject;
