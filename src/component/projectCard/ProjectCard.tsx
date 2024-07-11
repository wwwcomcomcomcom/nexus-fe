import ProjectStatus from "./ProjectStatusIndicator.tsx";
import { DivProps } from "../../utils/typedef.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import ProjectIcon from "../icons/ProjectIcon.tsx";
import { getStatusColorSet } from "./projectStatus.ts";

interface ProjectCardProps extends DivProps {
  project: ProjectEntity;
}

export default function ProjectCard(props: ProjectCardProps) {
  const colorSet = getStatusColorSet(props.project.status);
  return (
    <div
      className={
        "p-5 rounded-2xl border shadow-sm h-[350px] w-[280px] flex flex-col bg-white z-10" +
        (props.className !== undefined ? props.className : "")
      }
      data-v0-t="card"
    >
      <div className="grow flex items-center justify-center">
        <div
          className="bg-orange-100 p-4 rounded-3xl"
          style={{ backgroundColor: colorSet[1] }}
        >
          <ProjectIcon color={colorSet[0]} />
        </div>
      </div>
      <div className="grow flex flex-col items-center">
        <h1 className="text-xl font-bold mb-5">{props.project.name}</h1>
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
