import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/aablocks.png";
import "swiper/css";

const projectPath = "https://github.com/jmermar/AABBlocks";

const AABlocks: ProjectTemplate = {
  id: "aablocks",
  title: "AABlocks",
  thumbNailSrc: image1,
  tech: "C++, Vulkan, SDL2",
  previewText: "WIP minecraft clone made with Vulkan and C++, featuring deferred rendering and PBR materials.",  link: projectPath
};

export default AABlocks;
