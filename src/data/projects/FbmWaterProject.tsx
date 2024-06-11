import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/water/screenshot.gif";
import { Link } from "react-router-dom";
import "swiper/css";

const projectPath = "https://github.com/jmermar/Vulkan-Water-Renderer";

const FbmWaterProject: ProjectTemplate = {
  id: "fbm-water",
  title: "Fractional Brownian Motion Ocean Simulation",
  thumbNailSrc: image1,
  previewText: (
    <>
      <p>
        Ocean Simulation with Fractional Brownian Motion and environment
        reflections.
      </p>
    </>
  ),
  text: (
    <>
      <img src={image1} />
      <p>
        {" "}
        Ocean simulation with Fractional Brownian Motion waves and environment
        reflections
      </p>
      <p>
        The water is composed of a flat plane with lots of vertices, each vertex
        shader the vertex height will be calculated by a wave height function as
        described{" "}
        <Link to="https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models">
          {" "}
          in this article
        </Link>
        . In addition, Fractional Brownian Motion is used for getting finer
        details on waves.
      </p>
      <p>
        Water normals are calculated per fragment for getting finer details, by
        derivating the wave heigth function.
      </p>
      <p>
        The water shader uses Lambertian Diffuse for diffuse lighting as well as
        bling specular lighting. For reflections Shlick's Fresnel approximation
        is being used along an environment map for getting the reflection color.
      </p>
      <p>
        <Link to={projectPath}>Project github page</Link>
      </p>
    </>
  ),
};

export default FbmWaterProject;
