import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/water/screenshot.gif";
import "swiper/css";

const projectPath = "https://github.com/jmermar/Vulkan-Water-Renderer";

const FbmWaterProject: ProjectTemplate = {
  id: "fbm-water",
  title: "Vulkan Water Renderer",
  tech: "C++, Vulkan, SDL2",
  thumbNailSrc: image1,
  previewText: "Water Renderer using Vulkan and C++, based on Fractional Brownian Motion and Gerstner Waves.",
  link: projectPath
};

export default FbmWaterProject;
