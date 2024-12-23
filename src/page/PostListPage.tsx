import { useNavigate } from "react-router-dom";
import { useUserStore } from "../shared/userStore";
import PostList from "../component/PostList";
import { useRef, useState, useEffect } from "react";
import { PostEntity } from "../entity/PostEntity";

export default function PostListPage() {
  const userStore = useUserStore();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(userStore.jwt && { Authorization: `Bearer ${userStore.jwt}` }),
        },
      });

      if (!response.ok) {
        throw new Error(`서버 오류 (${response.status})`);
      }

      const data: PostEntity[] = await response.json();
      setPosts(data);
    } catch (err) {
      console.error("게시글 로딩 실패:", err);
      setError(err instanceof Error ? err.message : "서버 오류가 발생했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row w-full px-10 place-content-between justify-center">
        <h1 className="text-3xl font-bold text-center pt-20 pb-10">
          Community
        </h1>
      </div>
      {error && <div className="text-red-500 text-center py-4">{error}</div>}
      <PostList
        scrollRef={scrollRef}
        initialPosts={posts}
        isLoading={isLoading}
      />
    </div>
  );
}
