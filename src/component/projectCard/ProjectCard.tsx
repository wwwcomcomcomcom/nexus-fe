import ProjectStatus from "./ProjectStatusIndicator.tsx";
import { DivProps } from "../../utils/typedef.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import ProjectIcon from "../icons/ProjectIcon.tsx";
import { getStatusColorSet } from "./projectStatus.ts";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps extends DivProps {
  project: ProjectEntity;
  width?: number;
  height?: number;
}

export default function ProjectCard(props: ProjectCardProps) {
  const colorSet = getStatusColorSet(props.project.status);
  const navigate = useNavigate();
  const width = props.width ?? 200;
  const height = props.height ?? 250;
  return (
    <div
      className={
        "cursor-pointer p-5 pb-10 rounded-2xl border border-gray-200 shadow-[0px_0.5px_15px_1px_rgb(0,0,0,0.1)] flex flex-col bg-white z-10 hover:scale-105 transition " +
        (props.className !== undefined ? props.className : "")
      }
      style={{
        width: width + "px",
        height: height + "px",
      }}
      onClick={() => navigate(`/project/${props.project.id}`)}
      data-v0-t="card"
    >
      <div className="grow flex items-center justify-center">
        <div
          className="bg-orange-100 p-4 rounded-3xl"
          style={{ backgroundColor: colorSet[1] }}
        >
          <ProjectIcon
            color={colorSet[0]}
            width={width / 4}
            height={width / 4}
          />
        </div>
      </div>
      <div className="grow flex flex-col items-center">
        <h1 className="text-lg font-semibold mt-5">{props.project.name}</h1>
        <ProjectStatus status={props.project.status} />
        <div className="grid grow gap-2 text-sm justify-center mt-5">
          {/* <p className="truncate">{props.project.description}</p> */}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Updated 2 days ago
          </p>
        </div>
      </div>
    </div>
  );
}
