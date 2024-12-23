import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";
import { usePostFormStore } from "../component/createPost/postFormStore";

export default function CreatePostPage() {
  const navigate = useNavigate();
  const formStore = usePostFormStore();

  const isDisabled = !formStore.title || !formStore.content;

  const submitPostData = async () => {
    if (isDisabled) return;

    try {
      const response = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formStore.title,
          content: formStore.content,
          author: formStore.author,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const postId = data.id;
        navigate(`/post/${postId}`);
      } else {
        const errorData = await response.json();
        alert(`게시글 생성에 실패했습니다: ${errorData.message}`);
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
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Create Post</h1>
          <p className="text-gray-500">글을 작성하고 사람들과 공유해보세요.</p>
        </div>
        <div className="flex flex-col items-center p-4 pb-10">
          <div className="w-full max-w-7xl mt-3 p-14 bg-white rounded-3xl shadow-lg border border-[#F2F2F2]">
            <div className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="postTitle"
                  className="block text-2xl text-gray-700"
                >
                  제목
                </label>
                <input
                  id="postTitle"
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-lg outline-none"
                  value={formStore.title}
                  onInput={(e: React.FormEvent<HTMLInputElement>) =>
                    formStore.setProjectForm({ title: e.currentTarget.value })
                  }
                  placeholder="제목을 입력해주세요."
                />
              </div>
              <div>
                <label
                  htmlFor="projecContent"
                  className="block text-2xl text-gray-700"
                >
                  내용
                </label>
                <textarea
                  id="projectDescription"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm outline-none resize-none"
                  value={formStore.content}
                  rows={1}
                  style={{ overflow: "hidden", minHeight: "100px" }}
                  onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                    adjustHeight(e as React.ChangeEvent<HTMLTextAreaElement>);
                    formStore.setProjectForm({
                      content: e.currentTarget.value,
                    });
                  }}
                  placeholder="글 내용을 작성해주세요."
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className={`py-2 px-6 w-[40%] rounded-md text-lg shadow-sm transition transform ${
                    isDisabled
                      ? "bg-gray-300 cursor-not-allowed text-gray-700"
                      : "bg-[#FFF5DB] text-black hover:-translate-y-0.5 active:translate-y-0.5"
                  }`}
                  disabled={isDisabled}
                  onClick={submitPostData}
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
