import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/terrain/banner.png";
import waterGif from "../../assets/vulkan/terrain/water.gif";
import { Link } from "react-router-dom";
import "swiper/css";

const projectPath = "https://github.com/jmermar/Vulkan-Terrain-Renderer";

const VulkanTerrainProject: ProjectTemplate = {
  id: "vulkan-terrain-renderer",
  title: "Vulkan Terrain Renderer",
  thumbNailSrc: image1,
  previewText: (
    <>
      <p>
        Procedural terrain renderer with dynamic LOD and Screen Space Reflection
        (SSR) for water simulation.
      </p>
    </>
  ),
  text: (
    <>
      <div className="video-responsive">
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/hysko2e0ro0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <p>Terrain renderer with dynamic LOD and SSR for water shading</p>
      <h3> Dynamic LOD and procedural terrain</h3>
      <p>
        There is a compute shader that will create quad patches surronding
        player Field of View and dispatch them to the terrain rendering
        pipeline.
      </p>

      <p>
        Each patch will pass by a tessellation shader that will subdivide it
        depending of its distance to player camera, thus achieving dynamic LOD.
      </p>
      <p>
        The tessellation evaluation will set an height for each of the
        tessellated vertices depending of a perlin noise function by using the x
        and z world coordinates as input.
      </p>
      <h3>Water shading</h3>
      <img src={waterGif} />
      <p>
        Water will be composed of chunks of quads with only 4 vertices, each
        quad will be shaded as explained in{" "}
        <Link to="https://www.youtube.com/watch?v=HusvGeEDU_U&list=PLRIWtICgwaX23jiqVByUs0bqhnalNTNZh">
          these video series
        </Link>
        . It mainly consists of both offset and normal textures for managing
        reflections and refraction as well as Schlick approximation for Fresnel
        equation and Bling Phong specular lighting.
      </p>
      <p>
        Instead of redrawing the scene two more times SSR have been use for
        water reflections, as explained{" "}
        <Link to="https://lettier.github.io/3d-game-shaders-for-beginners/screen-space-reflection.html">
          here
        </Link>
        .
      </p>
      <p>
        Source code available in it's{" "}
        <Link to={projectPath}>github repository</Link>.
      </p>
    </>
  ),
};

export default VulkanTerrainProject;
