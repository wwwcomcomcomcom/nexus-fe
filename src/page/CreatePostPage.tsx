import { useNavigate } from "react-router-dom";
import { useProjectFormStore } from "../component/createProject/projectFormStore";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";

export default function CreatePostPage() {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();

  const isDisabled = !formStore.name || !formStore.description;

  async function submitProjectData() {
    if (isDisabled) return;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formStore.name,
          description: formStore.description,
        }),
      });

      // const result = await response.json();

      // 게시글로 이동
      if (!response.ok) {
        // 임시로 !으로 바꾸어 놓음
        // const postId = result.id; // 서버에서 생성된 게시글 ID를 응답받았다고 가정
        const postId = 3; // id 임시로 3으로 지정
        navigate(`/post/${postId}`); // 게시글 상세 페이지로 이동
      } else {
        alert("게시글 생성에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("게시글 생성 중 오류가 발생했습니다.");
    }
  }

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
        {/* 컨테이너 */}
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

            {/* 프로젝트 설명 */}
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
                placeholder="글을 작성해주세요."
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
              className={`w-full py-2 px-4 rounded-md  text-md font-semibold shadow-md  ${
                isDisabled
                  ? "bg-gray-300 cursor-not-allowed text-gray-700 "
                  : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0.5 text-white"
              }`}
              disabled={isDisabled}
              onClick={submitProjectData}
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
