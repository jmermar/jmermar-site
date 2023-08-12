import "./style/main.less";
import ProjectPreview from "./components/ProjectPreview";
import snake from "./assets/snake.png";
import webcraft from "./assets/webcraft.png";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: ["Droid Sans", "Comic Neue"],
      },
    });
  }, []);

  return (
    <div className="content">
      <div className="header">
        <h1>José Meroño Martínez's personal projects</h1>
      </div>
      <ProjectPreview title="Webcraft" thumbNailSrc={webcraft}>
        Simple minecraft clone written using webGl and javascript
      </ProjectPreview>

      <ProjectPreview title="Snake game" thumbNailSrc={snake}>
        Simple minecraft clone written using webGl and javascript
      </ProjectPreview>
    </div>
  );
}

export default App;
