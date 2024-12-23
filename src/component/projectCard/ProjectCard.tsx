import ProjectStatus from "./ProjectStatusIndicator.tsx";
import { DivProps } from "../../utils/typedef.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import ProjectIcon from "../icons/ProjectIcon.tsx";
import { getStatusColorSet } from "./projectStatus.ts";
import { useNavigate } from "react-router-dom";
import { useUpdatedUserStore } from "../../shared/userApi.ts";

interface ProjectCardProps extends DivProps {
  project: ProjectEntity;
  width?: number;
  height?: number;
  isCreateCard?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  const colorSet = props.project ? getStatusColorSet(props.project.state) : [];
  const navigate = useNavigate();
  const { isLogin } = useUpdatedUserStore();
  const width = props.width ?? 200;
  const height = props.height ?? 250;

  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  if (props.isCreateCard) {
    return (
      <div
        className="cursor-pointer p-5 pb-10 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center bg-white z-10 hover:scale-105 transition"
        style={cardStyle}
      >
        <div className="text-5xl text-gray-400">+</div>
        {isLogin() ? (
          <p className="mt-4 text-gray-500">새 프로젝트</p>
        ) : (
          <span
            className="text-blue-500 cursor-pointer underline mt-4"
            onClick={() => navigate("/login")}
          >
            로그인이 필요합니다.
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`cursor-pointer p-5 pb-10 rounded-2xl border border-[#F2F2F2] shadow-[0px_0.5px_15px_1px_rgb(0,0,0,0.05)] flex flex-col bg-white z-10 hover:scale-105 transition ${
        props.className ?? ""
      }`}
      style={cardStyle}
      onClick={() => navigate(`/project/${props.project.id}`)}
      data-v0-t="card"
    >
      <div className="grow flex items-center justify-center">
        <div
          className="p-4 rounded-3xl"
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
        <h1 className="text-lg font-semibold mt-5">{props.project.title}</h1>
        <ProjectStatus status={props.project.state} />
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
