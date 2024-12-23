import { useNavigate } from "react-router-dom";
import { useUpdatedUserStore } from "../../shared/userApi";

export default function CreatePostCard() {
  const navigate = useNavigate();
  const { isLogin } = useUpdatedUserStore();

  return (
    <div>
      {isLogin() ? (
        <div
          className="cursor-pointer p-5 pb-10 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center bg-white z-10 hover:scale-105 transition"
          onClick={() => navigate("/createPost")}
        >
          <div className="text-5xl text-gray-400">+</div>
          <p className="mt-4 text-gray-500">새 게시글</p>
        </div>
      ) : (
        <div className="p-5 pb-10 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center bg-white">
          <p className="text-gray-500">
            게시글을 작성하기 위해서는 로그인이 필요합니다. <br />
            <span
              className="text-blue-500 cursor-pointer underline"
              onClick={() => navigate("/login")}
            >
              로그인 페이지로 이동
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
