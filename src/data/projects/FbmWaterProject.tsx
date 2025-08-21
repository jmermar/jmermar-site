import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/water/screenshot.gif";
import { Link } from "react-router-dom";
import "swiper/css";

const projectPath = "https://github.com/jmermar/Vulkan-Water-Renderer";

const FbmWaterProject: ProjectTemplate = {
  id: "fbm-water",
  title: "Vulkan Water Renderer",
  thumbNailSrc: image1,
  previewText: (
    <>
      <p>
        Water Renderer using Vulkan and C++, based on Fractional Brownian Motion and Gerstner Waves.
      </p>
    </>
  ),
  text: (
    <>
      <img src={image1} />
      <p>
        Water Renderer made with Vulkan and C++, using Fractional Brownian Motion and Gerstner Waves.
      </p>
      <p>
        <Link to="https://www.youtube.com/watch?v=oVUQuddr_cI">
        Video demonstration.
        </Link>
      </p>
      <p>
        This projects implements the water rendering techniques described{" "}
        <Link to="https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models">
          {" "}
          in this article
        </Link> as well as using Fractional Brownian Motion and PBR shading.
      </p>
      <p>
        Apart from water rendering, tessellation based dynamic LOD and compute shader have been used to make the ocean look infinite.
      </p>
      <p>
        In the demo a user interface is provided to play with the water parameters, as well as selecting one of tho presets, one consisting on open sea and the other being calm water.
      </p>
      <p>
        More info on the <Link to={projectPath}>project's github page</Link>.
      </p>
    </>
  ),
};

export default FbmWaterProject;
