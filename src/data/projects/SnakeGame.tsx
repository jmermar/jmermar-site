import { ProjectTemplate } from "../templates/ProjectTemplate";
import thumbnail from "../../assets/snake.png";
import { Link } from "react-router-dom";
const projectPath = "https://github.com/jmermar/C-SDL2-Snake";
const SnakeGame: ProjectTemplate = {
  id: "snakegame",
  title: "Snake game",
  thumbNailSrc: thumbnail,
  previewText: (
    <>
      <p>Simple snake game made with C and SDL2.</p>
    </>
  ),
  text: (
    <>
      <img src={thumbnail} />
      <p>
        Simple Snake game that I made when I was a Highschool student at Murcia.
      </p>
      <p>Play it here:</p>
      <iframe
        frameBorder="0"
        src="https://itch.io/embed/725388"
        width="552"
        height="167"
      >
        <a href="https://jo65.itch.io/another-snake-game">
          Another snake game by jo65
        </a>
      </iframe>

      <p>
        More info on the project can be found in it's{" "}
        <Link to={projectPath}>github page</Link>.
      </p>
    </>
  ),
};

export default SnakeGame;
