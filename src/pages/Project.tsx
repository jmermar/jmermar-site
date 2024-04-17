import "../style/main.less";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { ProjectTemplate } from "../data/templates/ProjectTemplate";
import RasterizersProject from "../data/projects/RasterizersProject";
import WebCraftProject from "../data/projects/WebcraftProject";
import { useParams } from "react-router-dom";

const ProjectMaps: { [key: string]: ProjectTemplate } = {
  "3d-rasterizers": RasterizersProject,
  webcraft: WebCraftProject,
};

function Project() {
  const params = useParams();
  const data = ProjectMaps[params.id as string];

  return (
    <>
      <Header />
      <div className="content page-project">
        <h3>{data.title}</h3>
        <div className="project-content">{data.text}</div>
      </div>
    </>
  );
}

export default Project;
