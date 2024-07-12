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
  function resetScroll() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    loadProjects();
    resetScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1) loadProjects();
  });

  return (
    <main className="flex flex-1 relative overflow-x-hidden" ref={scrollRef}>
      <div className="container grid w-[100%]  relative">
        <div className="w-[1000px] h-[1000px] bg-[#e2ecfc] rounded-full absolute top-[5rem] -right-[25rem] z-0"></div>
        <div className="w-[600px] h-[600px] bg-[#FFF7E3] rounded-full absolute top-[70rem] -translate-x-[15rem] z-0"></div>
        {/* <div className="w-[200px] h-[200px] bg-[#FFF7E3] rounded-full absolute top-[75rem] -translate-x-[3rem] z-0"></div> */}
        <div className="grid px-4 py-6 md:gap-8 md:px-6 justify-center w-[100%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {isLoading ? <Loading /> : null}
        </div>
      </div>
    </main>
  );
}
