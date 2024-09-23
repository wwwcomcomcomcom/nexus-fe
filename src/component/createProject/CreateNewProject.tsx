import { useNavigate } from "react-router-dom";
import { NewProjectStore, useProjectFormStore } from "./projectFormStore";

type FormStore = {
  frontend: number;
  backend: number;
  android: number;
  ios: number;
  flutter: number;
  ai: number;
  design: number;
};

const ROLES = [
  { title: "프론트엔드", targetRole: "frontend" },
  { title: "백엔드", targetRole: "backend" },
  { title: "안드로이드", targetRole: "android" },
  { title: "IOS", targetRole: "ios" },
  { title: "플러터", targetRole: "flutter" },
  { title: "AI", targetRole: "ai" },
  { title: "디자인", targetRole: "design" },
];

export default function CreateNewProject({
  setViewPage,
}: {
  setViewPage: (page: number) => void;
}) {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();

  function submitProjectData() {
    if (!formStore.name) {
      alert("프로젝트 이름을 입력해주세요");
      return;
    }
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
          <path d="M12 19L5 12l7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
      </div>
      <div className="flex flex-col border rounded-xl border-gray-400 p-12 my-10 gap-4 h-fit">
        <h1 className="text-[2rem] font-bold">새 프로젝트 만들기</h1>
        <h2 className="text-xl text-gray-500 mb-4">
          새 프로젝트를 등록하고 팀원을 모집하세요
        </h2>

        <label htmlFor="projectName">프로젝트 이름</label>
        <input
          id="projectName"
          type="text"
          className="transition-all duration-200 rounded-md border border-gray-300 text-lg p-1 focus:py-2"
          placeholder="프로젝트 이름을 입력해주세요"
          value={formStore.name}
          onInput={(e) =>
            formStore.setProjectForm({ name: e.currentTarget.value })
          }
        />

        <label htmlFor="projectDescription">프로젝트 설명</label>
        <textarea
          id="projectDescription"
          className="transition-all duration-200 rounded-md border border-gray-300 p-1"
          placeholder="프로젝트 설명을 입력해주세요.나중에 수정할 수 있습니다."
          value={formStore.description}
          onInput={(e) =>
            formStore.setProjectForm({ description: e.currentTarget.value })
          }
        />

        <div className="flex flex-col gap-3">
          <label className="font-semibold">필요 인원</label>
          {ROLES.map((role) => (
            <RoleInput
              key={role.targetRole}
              title={role.title}
              targetRole={role.targetRole as keyof FormStore}
              formData={formStore}
            />
          ))}
        </div>

        <button
          className="rounded-md h-10 px-6 relative bottom-0 text-lg bg-gray-200 mt-4 transition active:bg-gray-300 active:shadow-md shadow-black"
          onClick={submitProjectData}
        >
          Create Project
        </button>
      </div>
    </>
  );
}

interface RoleInputProps {
  title: string;
  targetRole: keyof FormStore;
  formData: NewProjectStore;
}

function RoleInput({ title, targetRole, formData }: RoleInputProps) {
  const inputStyle =
    "transition-all duration-200 rounded-md border border-gray-300 focus:py-1 outline-none px-2";

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    formData.setProjectForm({ ...formData, [targetRole]: value });
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={targetRole}>
        {title}
        {formData[targetRole] > 0 && <span className="ml-2">✅</span>}
      </label>
      <input
        id={targetRole}
        type="number"
        className={inputStyle}
        value={formData[targetRole]}
        onInput={handleInput}
      />
    </div>
  );
}
