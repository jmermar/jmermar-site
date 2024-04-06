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
                <li>Java</li>
                <li>NodeJS</li>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>Docker</li>
                <li>Git</li>
                <li>OpenGL</li>
                <li>Vulkan</li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <h3>About</h3>
            <p>
              Software engineer with professional experience with fullstack
              development and great passion for programming. Altough I've worked
              mainly in nodeJS ecosystem, I have great interest in other fields
              such as Java, C++ and Computer Graphics.
            </p>
            <p>
              I consider myself a proactive person and a self-taught programmer,
              which loves to discover a new technology every single day.
            </p>
            <p>
              I studied Computer Sience at University of Murcia in Spain, and
              developed a final Project about real-time 3D rendering using
              rasterization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
