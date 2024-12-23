import { useNavigate } from "react-router-dom";
import {
  NewProjectStore,
  useProjectFormStore,
} from "../component/createProject/projectFormStore";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";

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

export default function CreateProjectPage() {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();
  const isDisabled = !formStore.title || !formStore.description;

  const submitProjectData = async () => {
    if (isDisabled) return;

    try {
      const response = await fetch("/api/project/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formStore.title,
          description: formStore.description,
          frontend: formStore.frontend,
          backend: formStore.backend,
          android: formStore.android,
          ios: formStore.ios,
          flutter: formStore.flutter,
          ai: formStore.ai,
          design: formStore.design,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const projectId = data.id;
        navigate(`/project/${projectId}`);
      } else {
        const errorData = await response.json();
        alert(`프로젝트 생성에 실패했습니다: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("프로젝트 생성 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#F4F9FF] h-screen">
      <div className="px-8 py-4">
        <span
          className="inline-block p-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>

      <main className="overflow-hidden relative">
        {/* <div className="w-[50vw] h-[50vw] sm:w-[100rem] sm:h-[100rem] rounded-full absolute bg-[#F4F9FF]  right-0 -z-10 translate-x-1/3"></div>
        <div className="w-[40vw] h-[40vw] sm:w-[60rem] sm:h-[60rem] rounded-full absolute bg-[#F4F9FF] left-0 -z-10 -translate-x-1/2 top-[110rem]"></div> */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Create Project</h1>

          <p className="text-gray-500">
            새 프로젝트를 등록하고 팀원을 모집하세요
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="flex flex-col items-center p-4 pb-10">
          <div className="w-full max-w-7xl mt-3 p-14 bg-white rounded-3xl shadow-lg border border-[#F2F2F2]">
            <div>
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-xl font-bold text-gray-700"
                >
                  프로젝트 이름
                </label>
                <input
                  id="projectName"
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm outline-none resize-none"
                  placeholder="프로젝트 이름을 입력해주세요."
                  value={formStore.title}
                  onInput={(e) =>
                    formStore.setProjectForm({ title: e.currentTarget.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-xl font-bold text-gray-700 pt-3"
                >
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
                    targetRole={role.targetRole as keyof FormStore}
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
                    : "bg-[#F4F9FF] text-black hover:-translate-y-0.5 active:translate-y-0.5"
                }`}
                disabled={isDisabled}
                onClick={submitProjectData}
              >
                Create project
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
  targetRole: keyof FormStore;
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
