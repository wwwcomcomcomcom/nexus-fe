import { Dispatch, SetStateAction, useState } from "react"
import RocketIcon from "../component/icons/RocketIcon.tsx";
import GithubIcon from "../component/icons/GithubIcon.tsx";

export default function CreateProjectPage() {
  const [viewPage,setViewPage] = useState(0);
  const pages:JSX.Element[] = [
    <SelectCreateMode setViewPage={setViewPage}/>,
    <CreateNewProject setViewPage={setViewPage}/>,
    <h1>Create from github repository</h1>
  ]
  return <main className="flex justify-center h-fit">
    {pages[viewPage]}
  </main>
}

function SelectCreateMode({setViewPage}:{setViewPage:(page:number)=>void}) {
  return <div className="flex flex-col space-y-4 w-[min(60rem,100%)] px-10 pt-10 h-[calc(100vh-5rem)]">
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
type RoleData = {
  frontend: number;
  backend: number;
  android: number;
  ios: number;
  flutter: number;
  ai: number;
  design: number;
}
function CreateNewProject({
  setViewPage,
}: {
  setViewPage: (page: number) => void;
}) {
  // const template = <template className=""></template>;
  const inputStyle:string = "transition-all duration-200 rounded-md border border-gray-300 text-xl focus:text-2xl";
  const [roleData, setRoleData]:[RoleData,Dispatch<SetStateAction<RoleData>>] = useState({
    frontend: 0,
    backend: 0,
    android: 0,
    ios: 0,
    flutter: 0,
    ai: 0,
    design: 0,
  });
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
      <div className="flex flex-col border rounded-xl border-gray-400 p-12 my-10 gap-4 h-fit">
        <h1 className="text-[2rem] font-bold">새 프로젝트 만들기</h1>
        <h2 className="text-xl text-gray-500 mb-4">
          새 프로젝트를 등록하고 팀원을 모집하세요
        </h2>
        <label htmlFor="projectTitle">Project Title</label>
        <input
          id="projectTitle"
          type="text"
          className={inputStyle}
        ></input>
        <label htmlFor="projectDescription">Project description</label>
        <input
          id="projectDescription"
          type="text"
          className={inputStyle}
        ></input>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">필요 인원</label>
          <RoleInput title="프론트엔드" targetRole="frontend" roleData={roleData} setRoleData={setRoleData}/>
          <label htmlFor="backend">백엔드</label>
          <input id="backend" type="number" className={inputStyle}></input>
          <label htmlFor="android">안드로이드</label>
          <input id="android" type="number" className={inputStyle}></input>
          <label htmlFor="ios">IOS</label>
          <input id="ios" type="number" className={inputStyle}></input>
          <label htmlFor="flutter">플러터</label>
          <input id="flutter" type="number" className={inputStyle}></input>
          <label htmlFor="ai">AI</label>
          <input id="ai" type="number" className={inputStyle}></input>
          <label htmlFor="design">디자인</label>
          <input id="design" type="number" className={inputStyle}></input>
        </div>
      </div>
    </>
  );
}
interface RoleInputProps{
  title:string;
  targetRole:keyof RoleData;
  roleData:RoleData;
  setRoleData:Dispatch<SetStateAction<RoleData>>
}
function RoleInput(props:RoleInputProps){
  const inputStyle:string = "transition-all duration-200 rounded-md border border-gray-300 text-l focus:py-1 outline-none";
  
  return <div className="flex flex-col">
  <label htmlFor={props.targetRole}>{props.title}</label>
  <input id={props.targetRole} type="number" className={inputStyle} value={props.roleData[props.targetRole]}></input>
</div>;
}