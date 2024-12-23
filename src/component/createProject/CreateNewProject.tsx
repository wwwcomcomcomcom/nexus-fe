import { useNavigate } from "react-router-dom";
import { NewProjectStore, useProjectFormStore } from "./projectFormStore";
import { submitProjectData } from "./createProjectApi";
import { useUserStore } from "../../store/userStore";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import { Dispatch, SetStateAction } from "react";

const ROLES = [
  { title: "Frontend", targetRole: "frontend" },
  { title: "Backend", targetRole: "backend" },
  { title: "Android", targetRole: "android" },
  { title: "iOS", targetRole: "ios" },
  { title: "Flutter", targetRole: "flutter" },
  { title: "AI", targetRole: "ai" },
  { title: "Design", targetRole: "design" },
];

export default function CreateNewProject({ setViewPage }: { setViewPage: Dispatch<SetStateAction<number>> }) {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();
  const { user } = useUserStore();
  const isDisabled = !formStore.title || !formStore.description;

  async function handleSubmit() {
    if (!user || !user.id) {
      alert("로그인이 필요합니다");
      navigate("/login");
      return;
    }

    if (isDisabled) {
      alert("프로젝트 이름과 설명을 입력해주세요");
      return;
    }

    try {
      const projectDto = formStore.toCreateProjectDto(user.id);
      const response = await submitProjectData(projectDto);
      navigate(`/project/${response.id}`);
    } catch (error) {
      console.error("Failed to create project:", error);
      alert("프로젝트 생성에 실패했습니다. 다시 시도해주세요.");
    }
  }

  return (
    <div className="flex flex-col w-full bg-[#F4F9FF] h-screen">
      <div className="px-8 py-4">
        <span className="inline-block p-2 cursor-pointer" onClick={() => navigate(-1)}>
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>

      <main className="overflow-hidden relative">
        {/* <div className="w-[50vw] h-[50vw] sm:w-[100rem] sm:h-[100rem] rounded-full absolute bg-[#F4F9FF]  right-0 -z-10 translate-x-1/3"></div>
        <div className="w-[40vw] h-[40vw] sm:w-[60rem] sm:h-[60rem] rounded-full absolute bg-[#F4F9FF] left-0 -z-10 -translate-x-1/2 top-[110rem]"></div> */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Create Project</h1>

          <p className="text-gray-500">새 프로젝트를 등록하고 팀원을 모집하세요</p>
        </div>

        {/* 입력 폼 */}
        <div className="flex flex-col items-center p-4 pb-10">
          <div className="w-full max-w-7xl mt-3 p-14 bg-white rounded-3xl shadow-lg border border-[#F2F2F2]">
            <div>
              <div>
                <label htmlFor="projectName" className="block text-xl font-bold text-gray-700">
                  프로젝트 이름
                </label>
                <input
                  id="projectName"
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm outline-none resize-none"
                  placeholder="프로젝트 이름을 입력해주세요."
                  value={formStore.title}
                  onInput={(e) => formStore.setProjectForm({ title: e.currentTarget.value })}
                />
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-xl font-bold text-gray-700 pt-3">
                  프로젝트 설명
                </label>
                <textarea
                  id="projectDescription"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm outline-none resize-none"
                  placeholder="프로젝트 설명을 입력해주세요.나중에 수정할 수 있습니다."
                  value={formStore.description}
                  onInput={(e) =>
                    formStore.setProjectForm({
                      description: e.currentTarget.value,
                    })
                  }
                />
              </div>
            </div>

            {/* 폼 */}
            <div className="pt-5">
              <label className="font-semibold text-xl">필요 인원</label>
              <div className="flex flex-wrap gap-6 pt-4">
                {ROLES.map((role) => (
                  <RoleInput
                    key={role.targetRole}
                    title={role.title}
                    targetRole={role.targetRole as keyof Omit<NewProjectStore, "setProjectForm" | "toCreateProjectDto">}
                    formData={formStore}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button
                className={`py-2 px-6 w-[40%] rounded-md text-lg shadow-sm transition transform ${
                  isDisabled
                    ? "bg-gray-300 cursor-not-allowed text-gray-700"
                    : "bg-[#DEFFEE] text-black hover:-translate-y-0.5 active:translate-y-0.5"
                }`}
                disabled={isDisabled}
                onClick={handleSubmit}
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface RoleInputProps {
  title: string;
  targetRole: keyof Omit<NewProjectStore, "setProjectForm" | "toCreateProjectDto">;
  formData: NewProjectStore;
}

function RoleInput({ title, targetRole, formData }: RoleInputProps) {
  const inputStyle =
    "transition-all duration-200 rounded-md border border-gray-300 py-1 pl-3 mt-2 text-lg w-32 outline-none ";

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    formData.setProjectForm({ ...formData, [targetRole]: value });
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={targetRole}>
        {title}
        {Number(formData[targetRole]) > 0 && <span className="ml-2">✅</span>}
      </label>
      <input id={targetRole} type="number" className={inputStyle} value={formData[targetRole]} onInput={handleInput} />
    </div>
  );
}
