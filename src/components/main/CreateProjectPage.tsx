import { useState } from "react"
import RocketIcon from "../icons/RocketIcon";
import GithubIcon from "../icons/GithubIcon";

export default function CreateProjectPage() {
  const [viewPage,setViewPage] = useState(0);
  const pages:JSX.Element[] = [
    <SelectCreateMode setViewPage={setViewPage}/>,
    <CreateNewProject setViewPage={setViewPage}/>,
    <h1>Create from github repository</h1>
  ]
  return <main className="flex justify-center pt-4 h-[calc(100vh-5rem)]">
    {pages[viewPage]}
  </main>
}

function SelectCreateMode({setViewPage}:{setViewPage:(page:number)=>void}) {
  return <div className="flex flex-col space-y-4 w-[min(60rem,100%)] px-10">
    <h1 className="text-2xl font-bold text-center">Create Project</h1>
    <div className="flex w-full gap-10">
      <div className="w-1/3 h-60 border rounded-lg border-gray-300 flex flex-col items-center grow">
        <RocketIcon className="w-20 h-20 m-4"/>
        <h1 className="text-xl font-semibold">새 프로젝트 생성하기</h1>
        <h2 className="text-lg text-gray-400">새로운 프로젝트를 만들고 인원을 모집합니다.</h2>
        <button className="rounded-md h-10 px-6 relative bottom-0 text-lg bg-gray-200 mt-4" onClick={()=>setViewPage(1)}>Start</button>
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
function CreateNewProject({
  setViewPage,
}: {
  setViewPage: (page: number) => void;
}) {
  return (
    <>
      <div
        className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 m-2 absolute left-0"
        onClick={() => setViewPage(0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="projectName">Project Name</label>
        <input id="projectName" type="text" className="border border-gray-300" required></input>
        <label htmlFor="projectDescription">Project description</label>
        <input id="projectDescription" type="text" className="border border-gray-300"></input>
        <label>필요 인원</label>
        <label htmlFor="frontend">프론트엔드</label>
        <input id="frontend" type="number" className="border border-gray-300"></input>
        <label htmlFor="backend">백엔드</label>
        <input id="backend" type="number" className="border border-gray-300"></input>
        <label htmlFor="android">안드로이드</label>
        <input id="android" type="number" className="border border-gray-300"></input>
        <label htmlFor="ios">IOS</label>
        <input id="ios" type="number" className="border border-gray-300"></input>
        <label htmlFor="flutter">플러터</label>
        <input id="flutter" type="number" className="border border-gray-300"></input>
        <label htmlFor="ai">AI</label>
        <input id="ai" type="number" className="border border-gray-300"></input>
        <label htmlFor="design">디자인</label>
        <input id="design" type="number" className="border border-gray-300"></input>
      </div>
    </>
  );
}