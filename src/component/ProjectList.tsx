import { MutableRefObject, useEffect, useState } from "react";
import ProjectCard from "./projectCard/ProjectCard.tsx";
import Loading from "./Loading.tsx";
import { getAllProjectEntity } from "../shared/apiMockup.ts";
import { ProjectEntity } from "../entity/ProjectEntity.ts";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  useMotionValue,
} from "framer-motion";

export default function ProjectList({
  scrollRef,
}: {
  scrollRef: MutableRefObject<null | HTMLDivElement>;
}) {
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
  const { scrollY } = useScroll();
  const translateY1 = useMotionValue(0);
  const translateY2 = useMotionValue(0);
  const translateY3 = useMotionValue(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    translateY1.set(latest + 5000 * sinPulse(latest / 2000));
    translateY2.set(latest + 2500 * -sinPulse(latest / 3000));
    translateY3.set(latest + 3000 * sinPulse(latest / 2000));

    if (scrollRef.current!.scrollHeight - latest < 1100) loadProjects();
  });

  return (
    <main
      className="flex flex-1 overflow-x-hidden place-content-center"
      ref={scrollRef}
    >
      <div className="container grid w-full relative">
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
        {/* <div className="w-[200px] h-[200px] bg-[#FFF7E3] rounded-full absolute top-[75rem] -translate-x-[3rem] z-0"></div> */}
        <div className="grid px-4 py-6 md:gap-8 md:px-6 justify-center w-full">
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

function sinPulse(x: number) {
  const pulse = Math.ceil(Math.cos(x)) * 2 - 1;
  return (Math.sin(x) * pulse) / 2;
}
