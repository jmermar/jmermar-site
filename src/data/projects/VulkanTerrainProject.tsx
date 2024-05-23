import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/terrain/banner.png";
import waterGif from "../../assets/vulkan/terrain/water.gif";
import dudv from "../../assets/vulkan/terrain/dudv.png";
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
      <img src={image1} />
      <p>
        Vulkan Forward procedural terrain renderer using tessellation shaders
        for dynamic LOD and simplex noise for procedural heightmap generation.
      </p>
      <p>It also supports Screen Space Reflection (SSR) for water shading.</p>
      <h3> Tessellation shader </h3>
      The tessellation shader works with quads called patches, each patch will
      be subdivided in up to GPU max tessellation depending of the distance to
      camera, once the quad have been tessellated each new vertex will gather
      it's height from a noise function which uses simplex noise with multiple
      <h3>Passes</h3>
      <p>
        Currently the renderer consits of three passes, patch generation, depth
        prepass and forward rendering
      </p>
      <h4> Patch generation</h4>
      <p>
        This phase will write all patches that will be tessellated to a vertex
        buffer, applying frustum culling to those which are not visible.
      </p>
      <h4> Depth Preppass </h4>
      <p>
        This phase will draw the terrain just to the depth buffer, it is
        intended for future use with techniques such as forward+ rendering.
      </p>
      <h4>Forward rendering</h4>
      <p>
        This phase will read the precalculated depth buffer but not write onto
        it, and will have a fragment shader with will output to the screen
        framebuffer only. In this fragment the color is calculated by looking at
        different textures depending of the terrain height and applying diffuse
        ligthing from a directional light source.
      </p>
      <h4>Water rendering</h4>
      <img src={waterGif} />
      <p>
        The water shading is highly inspired by{" "}
        <Link to="https://www.youtube.com/watch?v=HusvGeEDU_U&list=PLRIWtICgwaX23jiqVByUs0bqhnalNTNZh">
          this series of videos
        </Link>
        . However, in order to not draw the scene two more times screen space
        reflection have been used both for reflection and refraction.
      </p>
      <p>
        Before rendering the water, the framebuffer is copied to an image that
        will be used as a texture by the water fragment shader, and in the water
        shader a reflection ray is casted over the water surface and traced
        until hits with and object by using the depth buffer of the image. Once
        hit the ray is transformed to screen coordinates and will gather the
        reflected color from the screen texture. This have the advantage of not
        needing to redraw the scene multiple times nor using raytracing over
        complex scenes, but will cause visual artifacts when a surface reflects
        a part of the scene which have not been rendered.
      </p>
      <p>
        We need to cast 2 rays, one for the reflected rays over the water
        surface and other for the refracted, this will give 2 color outputs that
        will be blended by a factor roughly inspired by the fresnel equation
        (the more perpendicular the view vector is to the water surface, the
        less rays are reflected and instead more are refracted).
      </p>
      <p>
        Finally, before getting the color from the screen texture, the
        calculated uv coordinates are offsetted by a texture for simulating a
        wave effect. This texture is called dudv map and contain offsets for v
        and u coordinates.
      </p>
      <p>
        {" "}
        The final result is a rough approximation of how water works in real
        life, wy margin of improvement by adding Physically Based techniques to
        the proccess
      </p>
      <p>
        An explanation of the SSR method can be found{" "}
        <Link to="https://lettier.github.io/3d-game-shaders-for-beginners/screen-space-reflection.html">
          here
        </Link>
        .
      </p>
      <p>
        More info on the project can be found in it's{" "}
        <Link to={projectPath}>github repository</Link>.
      </p>
    </>
  ),
};

export default VulkanTerrainProject;
