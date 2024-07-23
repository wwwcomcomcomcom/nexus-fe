import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "../component/elements/LeftArrowIcon";
import ProjectGreenTopBox from "../component/elements/ProjectGreenTopBox";

function ProjectPage(/*props: DivProps*/) {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
      <div className="p-8">
        <span
          className="inline-block p-2 cursor-pointer "
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <div className="w-full h-[70vh] flex justify-end">
        <div className="md:w-2/3 w-full h-full bg-[#F4F9FF] rounded-3xl relative">
          <div className="absolute w-full h-fit flex justify-start items-start -translate-x-10 -translate-y-10 max-md:translate-x-0">
            <ProjectGreenTopBox className="w-2/3 max-w-[30rem] h-fit max-md:w-1/2" />
            <div className="absolute bg-white rounded-full text-6xl font-extrabold py-6 px-14 translate-y-3/4 -translate-x-[80%] shadow-xl">
              NEXUS
              <div className="absolute bg-white shadow-xl flex items-center gap-2 rounded-full p-2 pr-4 border border-gray-200 translate-x-[115%]">
                <div className="w-10 h-10 rounded-full bg-orange-400"></div>
                <div className="text-2xl">모집중</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
