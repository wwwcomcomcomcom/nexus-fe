import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";
import NeedCard from "../component/projectCard/NeedCard";
import ProfileCard from "../component/projectCard/ProfileCard";
import {
  generateProjectEntity,
  getAllNededEntity,
  getAllProfileEntity,
} from "../shared/apiMockup";
import ProjectGreenTopBox from "../component/elements/ProjectGreenTopBox";
import IntroduceProject from "./IntroduceProject";
import { getStatusColorSet } from "../component/projectCard/projectStatus";
import GitGraph from "./GitGraph";

function ProjectPage() {
  const project = generateProjectEntity();
  const { id } = useParams();
  const navigate = useNavigate();
  const colorSet = getStatusColorSet(project.state);

  if (!id) {
    window.location.href = "/notfound";
    return null;
  }

  return (
    <main className="flex flex-col gap-24 mb-10">
      <div className="p-8">
        <span
          className="inline-block p-2 cursor-pointer "
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      {/* profile card 갯수에 맞도록 파랑색 배경 늘려야 함  */}
      <div className="w-full h-[100vh] flex justify-end">
        <div className="md:w-3/4 w-full h-full bg-[#F4F9FF] rounded-[3rem] relative rounded-r-none">
          <div className="absolute w-full h-fit flex justify-start items-start -translate-x-10 -translate-y-10 max-md:translate-x-0">
            <ProjectGreenTopBox className="w-1/2 max-w-[30rem] h-fit max-md:w-1/2" />
            <div className="absolute bg-white rounded-full text-6xl font-extrabold py-5 px-10 translate-y-1/2 -translate-x-[80%] shadow-xl">
              {project.title}
              <div className="absolute bg-white shadow-xl flex items-center gap-2 rounded-full p-2 pr-4 border border-gray-200 translate-x-[115%]">
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: colorSet[0] }}
                ></div>
                <div className="text-2xl">{project.state}</div>
              </div>
            </div>
            <div className="text-sm absolute text-[#757575] top-[25%] left-[8%]">
              {project.description}
            </div>
          </div>

          <div className="w-full flex justify-end pt-16 pr-[5%]">
            <div className="w-1/2">
              {project.state === "모집중" && (
                <div className="flex mb-8 w-full pr-8 gap-8">
                  {/* 임시*/}
                  {getAllNededEntity(2).map((need) => (
                    <NeedCard need={need} className="h-[8rem]" />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex justify-end pr-[5%]">
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-x-[30%] gap-y-6 w-fit">
                {/* 임시로 profile card 갯수 4개로 지정해둔 상태   */}
                {getAllProfileEntity(4).map((profile) => (
                  <ProfileCard profile={profile} className="h-[8rem]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <IntroduceProject />

      {/* 진행중일 때 깃 그래프 */}

      {project.state === "진행중" && <GitGraph />}
      {true && <GitGraph />}
    </main>
  );
}

export default ProjectPage;
