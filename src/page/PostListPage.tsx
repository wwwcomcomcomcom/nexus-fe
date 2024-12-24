import { useUserStore } from "../shared/userStore";
import PostList from "../component/PostList";
import { useRef, useState, useEffect } from "react";
import { PostEntity } from "../entity/PostEntity";

export default function PostListPage(): JSX.Element {
  const userStore = useUserStore();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response: Response = await fetch("/api/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(userStore.jwt && { Authorization: `Bearer ${userStore.jwt}` }),
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      } else if (response.status === 404) {
        throw new Error("게시글이 없습니다.");
      }

      const data: PostEntity[] = await response.json();
      setPosts(data);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "서버 오류가 발생했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect((): void => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row w-full px-10 place-content-between justify-center">
        <h1 className="text-3xl font-bold text-center pt-20 pb-10">Community</h1>
      </div>
      {error && <div className="text-red-500 text-center py-4">{error}</div>}
      <PostList scrollRef={scrollRef} initialPosts={posts} isLoading={isLoading} />
    </div>
  );
}
