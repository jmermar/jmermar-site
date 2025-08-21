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
          <p>I'm Jose Meroño Martinez, a developer with a degree on Computer Science based in Spain. I've worked mainly as a web developer in technologies such as NodeJs and Java.
          </p>
          <p>However, I'm not only interested in web development but in many aspects of programming, being game development and computer graphics some of them.
          </p>
          <p>During several years I've worked on multiple side projects that now I want to showcase. Thus, I created this website for hosting them as well as links to their github repositories.
            They are mainly made with either C or C++ and using some kind of graphics API such as Opengl or Vulkan.
          </p>
          <p>
            Apart from development I also love mathematics, reading, and climbing. Now I'm also self-studying Japanese.
          </p>
        </article>
      </div>
    </>
  );
}

export default Home;
