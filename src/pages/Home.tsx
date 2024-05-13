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
            Computer Scientist with experience as full stack software
            development. Here I share my personal projects mostly related to
            computer graphics and game development.
          </p>
          <p>
            I studied a degree of computer Science in University of Murcia,
            where I specialized on Theory of Computation and Artificial
            Intelligence.
          </p>
          <p>
            One of my main interests is low level graphics programming using
            APIs like OpenGL and Vulkan, and studying GPU and CPU architecture
            in order to improve rendering performance. Im also interested in web
            development, cryptography and Computer Vision.
          </p>
        </article>
      </div>
    </>
  );
}

export default Home;
