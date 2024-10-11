import { useNavigate } from "react-router-dom";
import { useProjectFormStore } from "../component/createProject/projectFormStore";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";

export default function CreatePostPage() {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();

  function submitProjectData() {
    if (!formStore.name) {
      alert("프로젝트 이름을 입력해주세요");
      return;
    }
  }

  const isDisabled = !formStore.name || !formStore.description; // 제목 또는 내용이 비어있으면 비활성화

  return (
    <>
      <div className="px-8 py-4">
        <span
          className="inline-block p-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create Post</h1>
        <p className="text-gray-500 text-sm">
          글을 작성하고 사람들과 공유해보세요.
        </p>
      </div>
      <div className="flex flex-col items-center h-fit p-4 pb-10 ">
        {/* 컨테이너*/}
        <div className="w-full max-w-lg mt-3 p-14 bg-white rounded-3xl shadow-lg border border-[#F2F2F2] ">
          <div className="flex flex-col gap-6">
            {/* 프로젝트 이름 */}
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700"
              >
                제목
              </label>
              <input
                id="projectName"
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="글 제목을 입력해주세요."
                value={formStore.name}
                onInput={(e) =>
                  formStore.setProjectForm({ name: e.currentTarget.value })
                }
              />
            </div>

            {/* 프로젝트 설명*/}
            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                내용
              </label>
              <textarea
                id="projectDescription"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                placeholder="글을 작성해주세요. "
                value={formStore.description}
                rows={5}
                style={{ overflow: "hidden", resize: "none" }}
                onInput={(e) =>
                  formStore.setProjectForm({
                    description: e.currentTarget.value,
                  })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              className={`w-full py-2 px-4 rounded-md text-white text-md font-semibold shadow-md  ${
                isDisabled
                  ? "bg-gray-300 cursor-not-allowed text-gray-700"
                  : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0.5"
              }`}
              onClick={submitProjectData}
              disabled={isDisabled}
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
