import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/terrain/banner.png";
import { Link } from "react-router-dom";
import "swiper/css";

const projectPath = "https://github.com/jmermar/Vulkan-Terrain-Renderer";

const VulkanTerrainProject: ProjectTemplate = {
  id: "vulkan-terrain-renderer",
  title: "Vulkan Terrain Renderer",
  thumbNailSrc: image1,
  previewText: (
    <>
      <p>Procedural terrain renderer with dynamic LOD.</p>
    </>
  ),
  text: (
    <>
      <img src={image1} />
      <p>
        Vulkan Forward procedural terrain renderer using tessellation shaders
        for dynamic and simplex noise for procedural heightmap generation.
      </p>
      <h3> Tessellation shader </h3>
      The tessellation shader works with quads called patches, each patch will
      be subdivided in up to GPU max tessellation depending of the distance to
      camera, once the quad have been tessellated each new vertex will gather
      it's height from a noise function which uses simplex noise with multiple
      octaves.
      <h3>Passes</h3>
      <p>
        Currently the renderer consits of three passes, patch generation, depth
        prepass and forward rendering
      </p>
      <h4> Patch generation</h4>
      This phase will write all patches that will be tessellated to a vertex
      buffer, applying frustum culling to those which are not visible.
      <h4> Depth Preppass </h4>
      This phase will draw the terrain just to the depth buffer, it is intended
      for future use with techniques such as forward+ rendering.
      <h4>Forward rendering</h4>
      This phase will read the precalculated depth buffer but not write onto it,
      and will have a fragment shader with will output to the screen framebuffer
      only. In this fragment the color is calculated by looking at different
      textures depending of the terrain height and applying diffuse ligthing
      from a directional light source.
      <p>
        More info on the project can be found in it's{" "}
        <Link to={projectPath}>github repository</Link>.
      </p>
    </>
  ),
};

export default VulkanTerrainProject;
