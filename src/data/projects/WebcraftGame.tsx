import { ProjectTemplate } from "../templates/ProjectTemplate";
import thumbnail from "../../assets/webcraft.png";
const projectPath = "https://github.com/jmermar/WebCraft";
const WebCraftGame: ProjectTemplate = {
  id: "webcraft",
  title: "Webcraft",
  tech: "javascript, WebGL",
  thumbNailSrc: thumbnail,
  previewText: "Simple minecraft clone written using WebGL and javascript.",
  link: projectPath
};

export default WebCraftGame;
