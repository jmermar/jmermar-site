import { ReactNode } from "react";

interface Props {
  thumbNailSrc: string;
  title: string;
  children: ReactNode;
  projectPath: string;
}

export default function ProjectPreview(props: Props) {
  return (
    <div className="project-preview">
      <img src={props.thumbNailSrc} alt={props.title}></img>
      <div>
        <a href={props.projectPath}>
          <h2>{props.title}</h2>
        </a>
        <div className="project-content">{props.children}</div>
      </div>
    </div>
  );
}
