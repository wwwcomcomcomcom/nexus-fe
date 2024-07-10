import PostCard from "./projectCard/PostCard";
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading.tsx";
import { getAllPostEntity } from "../shared/apiMockup.ts";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { PostEntity } from "../entity/PostEntity.ts";

export default function PostList() {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadPosts, []);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1) loadPosts();
  });

  return (
    <main
      className="flex flex-1 overflow-y-auto justify-center max-h-[70vh]"
      ref={scrollRef}
    >
      <div className="container grid  gap-4 px-4 py-6 md:gap-8 md:px-6 w-[50%] z-10">
        {/* <div className="w-[500px] h-[500px] bg-[#FFF7E3] rounded-full relative z-0 "></div> */}

        {
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-9">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        }
        {isloading ? <Loading /> : null}
      </div>
    </main>
  );
}
