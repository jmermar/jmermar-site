import { ProjectTemplate } from "../templates/ProjectTemplate";
import thumbnail from "../../assets/webcraft.png";
import { Link } from "react-router-dom";
const projectPath = "https://github.com/jmermar/WebCraft";
const WebCraftGame: ProjectTemplate = {
  id: "webcraft",
  title: "Webcraft",
  thumbNailSrc: thumbnail,
  previewText: (
    <>
      <p>Simple minecraft clone written using WebGL and javascript.</p>
      <p>
        It can generate random worlds where you can place and remove blocks.
      </p>
    </>
  ),
  text: (
    <>
      <p>
        Voxel game with random world generation and the ability to place and
        remove blocks, fully playable from browser.
      </p>
      Play it rigth here:
      <iframe
        className="embedd"
        frameBorder="0"
        src="https://itch.io/embed-upload/8492139?color=193d3f"
        allowFullScreen={true}
      >
        <a href="https://jo65.itch.io/webcraft">Play WebCraft on itch.io</a>
      </iframe>
      <p>
        Or go to it's{" "}
        <Link to="https://jo65.itch.io/webcraft"> Itch.io page</Link>
      </p>
      <p>
        Source code <Link to={projectPath}>github page</Link>.
      </p>
    </>
  ),
};

export default WebCraftGame;
