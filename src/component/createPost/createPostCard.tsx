import { useNavigate } from "react-router-dom";

export default function CreatePostCard() {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer p-5 pb-10 rounded-2xl border-2 border-dashed border-gray-300  flex flex-col items-center justify-center bg-white z-10 hover:scale-105 transition"
      onClick={() => navigate("/createPost")}
    >
      <div className="text-5xl text-gray-400">+</div>
      <p className="mt-4 text-gray-500">새 게시글</p>
    </div>
  );
}
