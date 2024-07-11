import { useEffect, useRef, useState } from "react";
import ProjectCard from "./projectCard/ProjectCard.tsx";
import Loading from "./Loading.tsx";
import { getAllProjectEntity } from "../shared/apiMockup.ts";
import { ProjectEntity } from "../entity/ProjectEntity.ts";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ProjectList() {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  function loadProjects() {
    setLoading(true);

    setProjects([...projects, ...getAllProjectEntity(20)]);
    setLoading(false);
    // getAllProjectEntity(20).then((newProjects) => {
    //   setProjects([...projects, ...newProjects]);
    //   setLoading(false);
    // });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadProjects, []);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1) loadProjects();
  });

  return (
    <main
      className="flex flex-1 overflow-y-auto max-h-[70vh] relative overflow-hidden"
      ref={scrollRef}
    >
      <div className="w-[350px] h-[350px] bg-[#DAE9FF] rounded-full absolute top-[15rem] translate-x-[45rem] z-0"></div>
      <div className="w-[400px] h-[400px] bg-[#DAE9FF] rounded-full absolute top-[50rem] -translate-x-[17rem] z-0"></div>
      {/* <div className="w-[200px] h-[200px] bg-[#DAE9FF] rounded-full absolute top-[95rem] translate-x-[67rem] z-10"></div> */}
      <div className="w-[650px] h-[650px] bg-[#e2ecfc] rounded-full absolute top-[90rem] translate-x-[85rem] z-0"></div>
      <div className="container grid px-4 py-6 md:gap-8 md:px-6 w-[100%] justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {isLoading ? <Loading /> : null}
      </div>
    </main>
  );
}
