import "../style/main.less";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../components/Sidebar";

function Home() {
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
      <div className="content">
        <Sidebar />
        <article className="page-home">
          <h3>About</h3>
          <p>
            Software developer with experience as fullstack developer in the
            nodeJS ecosystem. I also have great interest in game development and
            computer graphics, specially regarding low-level multi-platform APIs
            such as OpenGL and Vulkan.
          </p>
          <p>
            Despite having a CS degree in University of Murcia, I consider
            myself a self-taught programmer, which great interest in finding new
            things to learn, and also very interested in the math involved in
            game development such as linear algebra and geometry.
          </p>
          <p>
            I'm also interested on low level aspects of programming such as CPU
            and GPU architecture, and how to write efficient code that can
            exploit the machine in which it is running, I'm specially interested
            on cache usage and work parallelization.
          </p>
        </article>
      </div>
    </>
  );
}

export default Home;
