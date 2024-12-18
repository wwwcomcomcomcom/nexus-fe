import PostCard from "./Card/PostCard.tsx";
import { MutableRefObject, useEffect, useState } from "react";
import Loading from "./Loading.tsx";
import { getAllPostEntity } from "../shared/apiMockup.ts";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { PostEntity } from "../entity/PostEntity.ts";
import { motion, useMotionValue } from "framer-motion";
export default function PostList({
  scrollRef,
}: {
  scrollRef: MutableRefObject<null | HTMLDivElement>;
}) {
  const [isloading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostEntity[]>([]);

  function loadPosts() {
    setLoading(true);

    setPosts([...posts, ...getAllPostEntity(20)]);
    setLoading(false);
    // getAllProjectEntity(20).then((newProjects) => {
    //   setProjects([...projects,...newProjects]);
    //   setLoading(false);
    // });
  }
  function resetScroll() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    loadPosts();
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

    if (scrollRef.current!.scrollHeight - latest < 1100) loadPosts();
  });

  return (
    <main
      className="flex flex-1 overflow-x-hidden place-content-center"
      ref={scrollRef}
    >
      <div className="grid w-full relative">
        <div className="w-full h-full absolute overflow-hidden">
          <motion.div
            className="w-[800px] h-[800px] bg-[#feead2] rounded-full absolute right-3/4"
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
        <div className="grid px-10 py-6 justify-center w-full place-items-center">
          <div className="grid grid-cols-1 gap-9 relative z-10 w-full max-w-screen-md">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          {isloading ? <Loading /> : null}
        </div>
      </div>
    </main>
  );
}

function sinPulse(x: number) {
  const pulse = Math.ceil(Math.cos(x)) * 2 - 1;
  return (Math.sin(x) * pulse) / 2;
}
