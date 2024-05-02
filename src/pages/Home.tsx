import "../style/main.less";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";

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
      <div className="content page-home">
        <div className="row">
          <div className="col-md-5 ">
            <div className="contact">
              <h3>Contact</h3>
              <div className="contact-item">
                <a href="https://github.com/jmermar">
                  <i className="devicon-github-original"></i>jmermar
                </a>
              </div>
              <div className="contact-item">
                <i className="fa">&#xf0e0;</i> josesmerono@gmail.com
              </div>
            </div>
            <div className="skills mt-4">
              <h3> Skills </h3>
              <ul>
                <li>C/C++</li>
                <li>Vulkan</li>
                <li>OpenGL</li>
                <li>Java</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <h3>About</h3>
            <p>
              Software developer with experience as fullstack developer in the
              nodeJS ecosystem. I also have great interest in game development
              and computer graphics, specially regarding low-level
              multi-platform APIs such as OpenGL and Vulkan.
            </p>
            <p>
              Despite having a CS degree in University of Murcia, I consider
              myself a self-taught programmer, which great interest in finding
              new things to learn, and also very interested in the math involved
              in game development such as linear algebra and geometry.
            </p>
            <p>
              I'm also interested on low level aspects of programming such as
              CPU and GPU architecture, and how to write efficient code that can
              exploit the machine in which it is running, I'm specially
              interested on cache usage and work parallelization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
