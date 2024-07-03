import GithubIcon from "../icons/GithubIcon";
import RocketIcon from "../icons/RocketIcon";
import { submitProjectData } from "./createProjectApi";
import { useProjectFormStore } from "./projectFormStore";

export default function SelectCreateMode({setViewPage}:{setViewPage:(page:number)=>void}) {
  
  const projectData = useProjectFormStore();
  const createProject = () => submitProjectData(projectData);
  
  return <div className="flex flex-col space-y-4 w-[min(60rem,100%)] px-10 h-[calc(100vh-5rem)] justify-center">
    <h1 className="text-2xl font-bold text-center">Create Project</h1>
    <div className="flex w-full gap-10">
      <div className="w-1/3 h-60 border rounded-lg border-gray-300 flex flex-col items-center grow">
        <RocketIcon className="w-20 h-20 m-4"/>
        <h1 className="text-xl font-semibold">새 프로젝트 생성하기</h1>
        <h2 className="text-lg text-gray-400">새로운 프로젝트를 만들고 인원을 모집합니다.</h2>
        <button className="rounded-md h-10 px-6 relative bottom-0 text-lg bg-gray-200 mt-4" onClick={()=>createProject}>Start</button>
      </div>
      <div className="w-1/3 h-60 border rounded-lg border-gray-300 flex flex-col items-center grow">
        <GithubIcon className="w-20 h-20 m-4"/>
        <h1 className="text-xl font-semibold">GitHub에서 프로젝트 가져오기</h1>
        <h2 className="text-lg text-gray-400">GitHub에서 가져온 프로젝트를 등록합니다.</h2>
        <button className="rounded-md h-10 px-6 relative bottom-0 text-lg bg-gray-200 mt-4" onClick={()=>setViewPage(2)}>Start</button>
      </div>
    </div>
  </div>
}