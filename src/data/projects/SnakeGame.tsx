import { ProjectTemplate } from "../templates/ProjectTemplate";
import thumbnail from "../../assets/snake.png";
const projectPath = "https://github.com/jmermar/C-SDL2-Snake";
const SnakeGame: ProjectTemplate = {
  id: "snakegame",
  title: "Snake game",
  tech: "c, wasm, SDL2",
  thumbNailSrc: thumbnail,
  previewText: "Simple snake game written in C and compiled to WebAssembly using SDL2.",
  link: projectPath
};

export default SnakeGame;
