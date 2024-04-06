import "../style/main.less";
import ProjectPreview from "../components/ProjectPreview";
import snake from "../assets/snake.png";
import webcraft from "../assets/webcraft.png";
import rasterizer from "../assets/rasterizer.gif";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";

function Projects() {
  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: ["Droid Sans", "Comic Neue"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <div className="content page-projects">
        <ProjectPreview
          title="3D rasterizers"
          thumbNailSrc={rasterizer}
          projectPath="https://github.com/jmermar/TFG-Real-time-rendering/tree/master"
        >
          <p>
            3 tiny 3D rasterizers, one of them being fully implemented on CPU,
            and other two being implemented with openGL and making use of either
            texture sampling or PBR Material rendering.
          </p>
          <p>
            This was part of my final project at University, dedicated to the
            research of real-time 3D rendering using rasterization of triangles.
          </p>
        </ProjectPreview>
        <ProjectPreview
          title="Webcraft"
          thumbNailSrc={webcraft}
          projectPath="https://github.com/jmermar/WebCraft"
        >
          <p>Simple minecraft clone written using webGl and javascript.</p>
          <p>
            {" "}
            It uses noise function for terrain and cave generation and have some
            interactive blocks like sand and water .
          </p>
        </ProjectPreview>

        <ProjectPreview
          title="Snake game"
          thumbNailSrc={snake}
          projectPath="https://github.com/jmermar/C-SDL2-Snake"
        >
          <p>
            Snake game made in C that can be played on the browser via WebASM.
          </p>
          <p>
            It features some characteristics like the ability to select the
            in-game speed and dificulty.
          </p>
        </ProjectPreview>
      </div>
    </>
  );
}

export default Projects;
