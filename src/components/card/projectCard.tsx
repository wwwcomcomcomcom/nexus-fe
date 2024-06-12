import {FaRegFolder} from "react-icons/fa6";
import ProjectStatus from "./projectStatusIndicator.tsx";
import ProjectInteractButton from "./projectInteractButton.tsx";
import { DivProps } from "../../utils/typedef.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";

interface ProjectCardProps extends DivProps {
  project:ProjectEntity
}

export default function ProjectCard(props: ProjectCardProps) {
  return <div className="p-5 rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
    <div className="space-y-1.5 flex flex-col md:flex-row md:items-center md:justify-between">
      <div style={{maxWidth:"70%"}} className="flex items-center space-x-4">
        <FaRegFolder size="24"/>
        <h2 style={{maxWidth:"70%"}} className="text-lg font-bold !mr-4 truncate">{props.project.name}</h2>
      </div>
      <ProjectInteractButton project={props.project}/>
    </div>
    <ProjectStatus status={props.project.status}/>
    <div className="grid w-full gap-2 text-sm">
      <p className="truncate">
        {props.project.description}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">Updated 2 days ago</p>
    </div>
  </div>;
}