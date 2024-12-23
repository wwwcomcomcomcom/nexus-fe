import { useNavigate } from "react-router-dom";
import { useProjectFormStore } from "../component/createProject/projectFormStore";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";

export default function CreatePostPage() {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();

  const isDisabled = !formStore.name || !formStore.description;

  const submitProjectData = async () => {
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

      if (!response.ok) {
        const postId = 3; // 임시로 지정된 ID
        navigate(`/post/${postId}`); // 게시글 상세 페이지로 이동
      } else {
        alert("게시글 생성에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("게시글 생성 중 오류가 발생했습니다.");
    }
  };

  const adjustHeight = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="h-screen bg-[#FFFCEF]">
      <div className="px-8 py-4">
        <span
          className="inline-block p-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <main className="overflow-hidden relative">
        {/* <div className="w-[50vw] h-[50vw] sm:w-[100rem] sm:h-[100rem] rounded-full absolute bg-[#FFF5DB] left-0 -z-10 -translate-x-1/2"></div>
        <div className="w-[40vw] h-[40vw] sm:w-[60rem] sm:h-[60rem] rounded-full absolute bg-[#FFF5DB] right-0 -z-10 translate-x-1/3 top-[110rem]"></div> */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Create Post</h1>
          <p className="text-gray-500">글을 작성하고 사람들과 공유해보세요.</p>
        </div>

        {/* 입력 폼 */}
        <div className="flex flex-col items-center p-4 pb-10">
          <div className="w-full max-w-7xl mt-3 p-14 bg-white rounded-3xl shadow-lg border border-[#F2F2F2]">
            <div className="flex flex-col gap-6">
              {/* 제목 */}
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-2xl text-gray-700"
                >
                  제목
                </label>
                <input
                  id="projectName"
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-lg outline-none "
                  value={formStore.name}
                  onInput={(e: React.FormEvent<HTMLInputElement>) =>
                    formStore.setProjectForm({ name: e.currentTarget.value })
                  }
                  placeholder="제목을 입력해주세요."
                />
              </div>

              {/* 내용 */}
              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-2xl text-gray-700"
                >
                  내용
                </label>
                <textarea
                  id="projectDescription"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm outline-none resize-none"
                  value={formStore.description}
                  rows={1}
                  style={{ overflow: "hidden", minHeight: "300px" }}
                  onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                    adjustHeight(e as React.ChangeEvent<HTMLTextAreaElement>);
                    formStore.setProjectForm({
                      description: e.currentTarget.value,
                    });
                  }}
                  placeholder="글 내용을 작성해주세요."
                />
              </div>

              {/* 버튼 */}
              <div className="flex justify-center mt-6">
                <button
                  className={`py-2 px-6 w-[40%] rounded-md text-lg shadow-sm transition transform ${
                    isDisabled
                      ? "bg-gray-300 cursor-not-allowed text-gray-700"
                      : "bg-[#DEFFEE] text-black hover:-translate-y-0.5 active:translate-y-0.5"
                  }`}
                  disabled={isDisabled}
                  onClick={submitProjectData}
                >
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
