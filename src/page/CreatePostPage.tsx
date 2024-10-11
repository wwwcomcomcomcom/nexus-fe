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

  return (
    <div className="flex justify-center h-fit">
      <div
        className="inline-flex items-center justify-center m-2 absolute left-0 p-8 cursor-pointer"
        onClick={() => navigate("/projects")}
      >
        <LeftArrowIcon />
      </div>
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold">Create Post</h1>
          <p className="text-sm text-[#757575] font-[8px] ">
            글을 작성하고 사람들과 공유해보세요
          </p>
        </div>

        <div className="flex flex-col border rounded-xl border-gray-400 p-12 my-10 gap-4 h-fit">
          <label htmlFor="projectName">제목</label>
          <input
            id="projectName"
            type="text"
            className="transition-all duration-200 rounded-md border border-gray-300 p-1 focus:py-2"
            placeholder="프로젝트 이름을 입력해주세요"
            value={formStore.name}
            onInput={(e) =>
              formStore.setProjectForm({ name: e.currentTarget.value })
            }
          />

          <label htmlFor="projectDescription">내용</label>
          <textarea
            id="projectDescription"
            className="transition-all duration-200 rounded-md border border-gray-300 p-1"
            placeholder="프로젝트 설명을 입력해주세요.나중에 수정할 수 있습니다."
            value={formStore.description}
            style={{ overflow: "hidden", resize: "none" }}
            onInput={(e) =>
              formStore.setProjectForm({ description: e.currentTarget.value })
            }
          />

          <button
            className="rounded-md h-10 px-6 relative bottom-0 text-lg bg-gray-200 mt-4 transition active:bg-gray-300 active:shadow-md shadow-black"
            onClick={submitProjectData}
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}
