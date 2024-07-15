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
      className="flex flex-1 overflow-x-hidden place-content-center"
      ref={scrollRef}
    >
      <div className="container grid gap-4 px-4 md:gap-8 md:px-6 w-[40%] z-10 relative">
        <div className="w-[700px] h-[700px] bg-[#FFF7E3] rounded-full absolute top-0 -translate-x-[37rem] z-0"></div>
        <div className="w-[350px] h-[350px] bg-[#DAE9FF] rounded-full absolute top-[400px] -translate-x-[10rem] z-0"></div>
        {/* <div className="w-[700px] h-[700px] bg-[#E5AAB4] rounded-full absolute top-[800px] -translate-x-[37rem] z-0"></div> */}
        <div className="w-[700px] h-[700px] bg-[#FFF7E3] rounded-full absolute top-[900px] translate-x-[40rem] z-0"></div>

        <div className="grid grid-cols-1 gap-9 relative z-10 ">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        {isloading ? <Loading /> : null}
      </div>
    </main>
  );
}
