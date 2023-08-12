import { ReactNode } from "react";

interface Props {
  thumbNailSrc: string;
  title: string;
  children: ReactNode;
}

export default function ProjectPreview(props: Props) {
  return (
    <div className="project-preview">
      <img src={props.thumbNailSrc} alt={props.title}></img>
      <div>
        <h2>{props.title}</h2>
        <div className="project-content">{props.children}</div>
      </div>
    </div>
  );
}
