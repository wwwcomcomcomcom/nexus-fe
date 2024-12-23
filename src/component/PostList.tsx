import PostCard from "./projectCard/PostCard.tsx";
import { MutableRefObject, useEffect, useState } from "react";
import Loading from "./Loading.tsx";
// import { getAllPostEntity } from "../shared/apiMockup.ts";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { PostEntity } from "../entity/PostEntity.ts";
import { motion, useMotionValue } from "framer-motion";
import CreatePostCard from "./createPost/createPostCard.tsx";

interface PostListProps {
  scrollRef: MutableRefObject<null | HTMLDivElement>;
  initialPosts: PostEntity[];
  isLoading: boolean;
}

export default function PostList({
  scrollRef,
  initialPosts,
  isLoading,
}: PostListProps) {
  const [posts, setPosts] = useState<PostEntity[]>(initialPosts);

  function loadPosts() {
    // setPosts([...posts, ...getAllPostEntity(20)]);
  }

  function resetScroll() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    // loadPosts();
    resetScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { scrollY } = useScroll();
  const translateY1 = useMotionValue(0);
  const translateY2 = useMotionValue(0);
  const translateY3 = useMotionValue(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    translateY1.set(latest + 5000 * sinPulse(latest / 2000));
    translateY2.set(latest + 2500 * -sinPulse(latest / 3000));
    translateY3.set(latest + 3000 * sinPulse(latest / 2000));

    // 스크롤 이벤트에서 loadPosts 호출 제거
    // if (scrollRef.current!.scrollHeight - latest < 1100) loadPosts();
  });

  return (
    <main
      className="flex flex-1 overflow-x-hidden place-content-center min-h-[76vh]"
      ref={scrollRef}
    >
      <div className="grid w-full relative">
        {/* 배경 */}
        <div className="w-full h-full absolute overflow-hidden">
          <motion.div
            className="w-[80rem] h-[800px] bg-[#feead2] rounded-full absolute right-3/4"
            style={{ translateY: translateY1 }}
          ></motion.div>
          <motion.div
            className="w-[1000px] h-[1000px] bg-[#d9e7ff] rounded-full absolute top-[5rem] -right-[25rem] z-0"
            style={{ translateY: translateY2 }}
          ></motion.div>
          <motion.div
            className="w-[500px] h-[500px] bg-[#fff3c5] rounded-full absolute top-[40rem] right- z-0"
            style={{ translateY: translateY3 }}
          ></motion.div>
        </div>

        <div className="grid px-10 py-6 justify-center w-full place-items-start ">
          <div className="grid grid-cols-1 gap-9 relative z-10 w-full max-w-screen-xl ">
            <CreatePostCard />

            {/* 임시로 쓴거임 */}
            <PostCard
              post={{
                id: "1",
                user: "1",
                name: "sdkjfh",
                content: "dfsjkhf",
              }}
            />
            {/* 여기까지 */}

            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          {isLoading ? <Loading /> : null}
        </div>
      </div>
    </main>
  );
}

function sinPulse(x: number) {
  const pulse = Math.ceil(Math.cos(x)) * 2 - 1;
  return (Math.sin(x) * pulse) / 2;
}
