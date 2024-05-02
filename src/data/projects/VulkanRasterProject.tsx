import { ProjectTemplate } from "../templates/ProjectTemplate";
import image1 from "../../assets/vulkan/banner.jpeg";
import { Link } from "react-router-dom";
import "swiper/css";

const projectPath = "https://github.com/jmermar/vkRaster";

const VulkanRasterProject: ProjectTemplate = {
  id: "vulkan-3d-renderer",
  title: "Vulkan Forward+ Renderer",
  thumbNailSrc: image1,
  previewText: (
    <>
      <p>
        Forward+ Renderer Written in Vulkan that supports PBR materials and GLB
        files for loading scenes.
      </p>
    </>
  ),
  text: (
    <>
      <img src={image1} />
      <p>
        Vulkan Forward+ Renderer written in C++. It supports multiple light
        sources, PBR materials and GLB files.
      </p>
      <h3>Features</h3>
      <p>
        The project is intended to showcase some common solutions regarding
        Graphics Application optimizations, specifically, it supports frustum
        culling from CPU and Forward+ (or tiled) rendering for displaying a lot
        of lights in the scene. It also supports frames in flight in order to
        not stall the GPU waiting for the CPU to finish sending all commands to
        the queue.
      </p>
      <h3> Forward+ </h3>
      <div className="video-responsive">
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/RQ28iZkKedY`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <p>
        The Forward+ rendering implementation is based on{" "}
        <Link to="https://takahiroharada.files.wordpress.com/2015/04/forward_plus.pdf">
          this paper
        </Link>
        and does all calculations on GPU with a Compute Shader.
      </p>
      <p>
        It works by splitting the render framebuffer in tiles of 16x16 pixels
        and precalculating which light interact with each of those tiles, so the
        fragment shaders only needs to iterate on the lights affecting the tile
        which each pixel falls into, instead of all the light sources.
      </p>
      <p>
        The software can display thousands of lights in a very performant way,
        and the more separated the lights are, the more performant it behaves,
        however it has the disadvantage that only 1024 lights can be displayed
        by tile.
      </p>
      <p>
        More info on the project can be found in it's{" "}
        <Link to={projectPath}>github repository</Link>.
      </p>
    </>
  ),
};

export default VulkanRasterProject;
