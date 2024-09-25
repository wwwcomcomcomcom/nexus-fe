import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import { getStatusColorSet } from "./projectStatus.ts";

interface ProjectInteractButtonProps {
  project: ProjectEntity;
}

export default function ProjectInteractButton(props: ProjectInteractButtonProps) {
  return (
    <button
      className={`bg-${getStatusColorSet(
        props.project.status
      )} inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3`}
      onClick={() => (window.location.href = `/project/${props.project.id}`)}
    >
      Overview
    </button>
  );
}
