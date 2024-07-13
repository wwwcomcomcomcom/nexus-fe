import { useNavigate } from "react-router-dom";
import { useUserStore } from "../shared/userStore";
import PostList from "../component/PostList";

export default function PostsPage() {
  const userStore = useUserStore();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex flex-row w-full px-10 place-content-between justify-center ">
        <h1 className="text-3xl font-bold text-center py-10">Community</h1>
        {userStore.isLogin() && (
          <div className="flex flex-row items-center">
            <button
              className="bg-blue-400 rounded-md h-10 px-3"
              onClick={() => navigate("/createPost")}
            >
              Create Post
            </button>
          </div>
        )}
      </div>
      <PostList />
    </div>
  );
}
