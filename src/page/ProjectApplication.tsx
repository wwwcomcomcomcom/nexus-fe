import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";
import { useProjectFormStore } from "../component/createProject/projectFormStore";
// import NeedCard from "../component/projectCard/NeedCard";
// import { getAllNededEntity } from "../shared/apiMockup";

export default function ProjectApplication() {
  const navigate = useNavigate();
  const formStore = useProjectFormStore();
  const submitApplicationData = async () => {
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({
          title: formStore.title,
          description: formStore.description,
        }),
      });

      if (!response.ok) {
        // 서버 응답이 실패한 경우
        const errorMessage = await response.text();
        console.error("Server error:", errorMessage);
        alert("프로젝트 등록에 실패하였습니다. 다시 시도해주세요.");
        return;
      }

      const { projectId } = await response.json();
      if (projectId) {
        navigate(`/project/${projectId}`);
      } else {
        alert("프로젝트 ID를 가져오는 데 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("프로젝트 등록 중 오류가 발생했습니다. 네트워크를 확인해주세요.");
    }
  };

  return (
    <div className="py-8">
      {/* 화살표 */}
      <div className="pl-8 pb-4">
        <span className="inline-block p-2 cursor-pointer " onClick={() => navigate(-1)}>
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>

      {/* 제목 */}
      <div className="text-center font-extrabold text-4xl mb-16">Application</div>
      {/* 폼 */}
      <div className="w-full flex justify-end  ">
        {/* 파랑 배경 */}
        <div className="md:w-3/4 w-full h-[55rem] bg-[#F4F9FF] rounded-[4rem] rounded-r-none relative "></div>

        {/* 전공카드 + 버튼 + 내용 */}
        <div className="absolute flex flex-row items-start  ">
          <div>
            {/* 전공 카드 */}
            <div className="mt-28">{/* 임시*/}</div>
          </div>

          {/* 내용 작성 */}
          <div className="mt-20 mr-20">
            <div>
              <label htmlFor="projectDescription" className="block text-3xl font-bold text-gray-700">
                지원서 작성
              </label>
              <textarea
                id="projectDescription"
                className="w-full mt-3 p-5 border rounded-xl shadow-lg text-xl outline-none resize-none"
                value={formStore.description}
                rows={1}
                style={{
                  overflow: "hidden",
                  minHeight: "40rem",
                  minWidth: "85rem",
                }}
                onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                  formStore.setProjectForm({
                    description: e.currentTarget.value,
                  });
                }}
                placeholder="지원서 내용을 작성해주세요."
              />
            </div>

            {/* 버튼 */}
            <div className="flex justify-end mt-6 pl-2">
              <button
                className={"py-3 px-6 w-[20%] rounded-md text-lg shadow-sm  bg-[#DEFFEE] text-black border border-1"}
                onClick={submitApplicationData}
              >
                제출하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
