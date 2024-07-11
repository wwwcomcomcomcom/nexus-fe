import { useNavigate } from "react-router-dom";
import { useUserStore } from "../shared/userStore";
import PostList from "../component/PostList";

export default function PostsPage() {
  const userStore = useUserStore();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-full mt-2">
      <div className="flex flex-row w-full px-10 place-content-between justify-center ">
        <div>
          <h1 className="text-2xl font-bold text-center my-5">Community</h1>
        </div>
        {userStore.isLogin() && (
          <div className="flex flex-row items-center">
            <button className="bg-blue-400 rounded-md h-10 px-3" onClick={() => navigate("/createPost")}>
              Create Post
            </button>
          </div>
        )}
      </div>
      <PostList />
    </div>
  );
}
