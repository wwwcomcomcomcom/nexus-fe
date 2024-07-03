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
  const [roleData, setRoleData]:[RoleData,Dispatch<SetStateAction<RoleData>>] = useState({
    frontend: 0,
    backend: 0,
    android: 0,
    ios: 0,
    flutter: 0,
    ai: 0,
    design: 0,
  });

  function submitProjectData(){
    const projectName = (document.getElementById("projectName") as HTMLInputElement).value;
    const projectDescription = (document.getElementById("projectDescription") as HTMLInputElement).value;
    
  }

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
        <label htmlFor="projectName">Project Name</label>
        <input
          id="projectName"
          type="text"
          className="transition-all duration-200 rounded-md border border-gray-300 text-lg p-1 focus:py-2"
        ></input>
        <label htmlFor="projectDescription">Project description</label>
        <textarea
          id="projectDescription"
          className="transition-all duration-200 rounded-md border border-gray-300 p-1"
        ></textarea>
        <div className="flex flex-col gap-3">
          <label className="font-semibold">필요 인원</label>
          <RoleInput title="프론트엔드" targetRole="frontend" roleData={roleData} setRoleData={setRoleData}/>
          <RoleInput title="백엔드" targetRole="backend" roleData={roleData} setRoleData={setRoleData}/>
          <RoleInput title="안드로이드" targetRole="android" roleData={roleData} setRoleData={setRoleData}/>
          <RoleInput title="IOS" targetRole="ios" roleData={roleData} setRoleData={setRoleData}/>
          <RoleInput title="플러터" targetRole="flutter" roleData={roleData} setRoleData={setRoleData}/>
          <RoleInput title="AI" targetRole="ai" roleData={roleData} setRoleData={setRoleData}/>
          <RoleInput title="디자인" targetRole="design" roleData={roleData} setRoleData={setRoleData}/>
        </div>
        <button className="rounded-md h-10 px-6 relative bottom-0 text-lg bg-gray-200 mt-4 transition active:bg-gray-300 active:shadow-md shadow-black" onClick={submitProjectData}>
          Create Project
        </button>
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
  const inputStyle:string = "transition-all duration-200 rounded-md border border-gray-300 focus:py-1 outline-none px-2";
  
  function handleInput(e:React.ChangeEvent<HTMLInputElement>){
    let value = parseInt(e.target.value);
    if(value < 0) value = 0;
    props.setRoleData({...props.roleData,[props.targetRole]:value});
  }
  return <div className="flex flex-col">
  <label htmlFor={props.targetRole}>
    {props.title}
    <span className="transition duration-300" style={{opacity:+(props.roleData[props.targetRole] > 0)}}>✅</span>
  </label>
  <input id={props.targetRole} type="number" className={inputStyle} value={props.roleData[props.targetRole]} onInput={handleInput}></input>
</div>;
}