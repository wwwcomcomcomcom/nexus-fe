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
  const navigate = useNavigate();
  const colorSet = getStatusColorSet(props.project.state);

  const handleClick = () => {
    navigate(`/project/${props.project.id}`);
  };

  return (
    <div
      className={`flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer ${props.className}`}
      style={{
        width: props.width,
        height: props.height,
      }}
      onClick={handleClick}
    >
      <div className="relative">
        <ProjectIcon className="w-16 h-16" color={colorSet[0]} />
        <div className="absolute w-3 h-3 rounded-full -right-1 -top-1" style={{ backgroundColor: colorSet[1] }}></div>
      </div>

      <div className="grow flex flex-col items-center">
        <h1 className="text-lg font-semibold mt-5">{props.project.title}</h1>
        <ProjectStatus status={props.project.state} />
        <div className="grid grow gap-2 text-sm justify-center mt-5">
          <p className="text-xs text-gray-500 dark:text-gray-400">Updated 2 days ago</p>
        </div>
      </div>
    </div>
  );
}
