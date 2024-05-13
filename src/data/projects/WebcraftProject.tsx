import { ProjectTemplate } from "../templates/ProjectTemplate";
import thumbnail from "../../assets/webcraft.png";
import { Link } from "react-router-dom";
const projectPath = "https://github.com/jmermar/WebCraft";
const itchIOPath = "https://jo65.itch.io/webcraft";
const WebCraftProject: ProjectTemplate = {
  id: "webcraft",
  title: "Webcraft",
  thumbNailSrc: thumbnail,
  previewText: (
    <>
      <p>Simple minecraft clone written using webGl and javascript.</p>
      <p>
        It uses noise function for terrain and cave generation and have some
        interactive blocks like sand and water .
      </p>
    </>
  ),
  text: (
    <>
      <img src={thumbnail} />
      <p>
        Simple minecraft clone made using javascript + webgl. I didn't updated
        the project for a long time, except for refactoring it in order to use
        webpack, so it is pretty much abandoned.
      </p>
      <p>
        As the game is hosted in itch io you can play it{" "}
        <Link to={itchIOPath}>here</Link>.
      </p>
      <p>
        Currently it support the next features:
        <ul>
          <li>2d perlin noise for world generation.</li>
          <li> Cave generation by using 3d perlin noise. </li>
          <li>Player physics with the blocks. </li>
          <li>Block placement and removing.</li>
          <li>
            Simple block physics for water and sand (much like old minecraft
            classic).
          </li>
        </ul>
      </p>
      <p>
        More info on the project can be found in it's{" "}
        <Link to={projectPath}>github page</Link>.
      </p>
    </>
  ),
};

export default WebCraftProject;
