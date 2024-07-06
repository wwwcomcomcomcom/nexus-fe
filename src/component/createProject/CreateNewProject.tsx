import { useNavigate } from "react-router-dom";
import { NewProjectStore, useProjectFormStore } from "./projectFormStore";

type formStore = {
  frontend: number;
  backend: number;
  android: number;
  ios: number;
  flutter: number;
  ai: number;
  design: number;
}
export default function CreateNewProject({
  setViewPage,
}: {
  setViewPage: (page: number) => void;
}) {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();

  function submitProjectData(){
    if(formStore.name === "") return alert("프로젝트 이름을 입력해주세요");
    setViewPage(1);
  }

  return (
    <>
      <div
        className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 m-2 absolute left-0"
        onClick={() => navigate("/projects")}
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
          value={formStore.name}
          onInput={(e) => formStore.setProjectForm({ name: e.currentTarget.value })}
        ></input>
        <label htmlFor="projectDescription">Project description</label>
        <textarea
          id="projectDescription"
          className="transition-all duration-200 rounded-md border border-gray-300 p-1"
          value={formStore.description}
          onInput={(e) => formStore.setProjectForm({ description: e.currentTarget.value })}
        ></textarea>
        <div className="flex flex-col gap-3">
          <label className="font-semibold">필요 인원</label>
          <RoleInput title="프론트엔드" targetRole="frontend" formData={formStore} />
          <RoleInput title="백엔드" targetRole="backend" formData={formStore} />
          <RoleInput title="안드로이드" targetRole="android" formData={formStore} />
          <RoleInput title="IOS" targetRole="ios" formData={formStore} />
          <RoleInput title="플러터" targetRole="flutter" formData={formStore} />
          <RoleInput title="AI" targetRole="ai" formData={formStore} />
          <RoleInput title="디자인" targetRole="design" formData={formStore} />
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
  targetRole:keyof formStore;
  formData:NewProjectStore;
}
function RoleInput(props:RoleInputProps){
  const inputStyle:string = "transition-all duration-200 rounded-md border border-gray-300 focus:py-1 outline-none px-2";
  
  function handleInput(e:React.ChangeEvent<HTMLInputElement>){
    let value = parseInt(e.target.value);
    if(value < 0 || Number.isNaN(value)) value = 0;
    props.formData.setProjectForm({...props.formData,[props.targetRole]:value});
  }
  return <div className="flex flex-col">
  <label htmlFor={props.targetRole}>
    {props.title}
    <span className="transition duration-300" style={{opacity:+(props.formData[props.targetRole] > 0)}}>✅</span>
  </label>
  <input id={props.targetRole} type="number" className={inputStyle} value={props.formData[props.targetRole]} onInput={handleInput}></input>
</div>;
}