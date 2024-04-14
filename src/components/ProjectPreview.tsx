import { Link } from "react-router-dom";
import { ProjectTemplate } from "../data/templates/ProjectTemplate";

interface Props {
  project: ProjectTemplate;
}

export default function ProjectPreview(props: Props) {
  const { project } = props;
  return (
    <div className="project-preview">
      <img src={project.thumbNailSrc} alt={project.title}></img>
      <div>
        <h3>{project.title}</h3>
        <div className="project-content">{project.previewText}</div>
        <Link to={`/project/${project.id}`}>More info</Link>
      </div>
    </div>
  );
}
