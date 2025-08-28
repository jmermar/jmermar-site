import { Link } from "react-router-dom";
import { ProjectTemplate } from "../data/templates/ProjectTemplate";

interface Props {
  project: ProjectTemplate;
}

export default function ProjectPreview(props: Props) {
  const { project } = props;
  return (
    <div className="project-preview">
      <h3>{project.title}</h3>
      <div>
        <img src={project.thumbNailSrc}></img>
        <div className="project-content">{project.tech} | {project.previewText}</div>
        <Link to={project.link}>Github page</Link>
      </div>
    </div>
  );
}
