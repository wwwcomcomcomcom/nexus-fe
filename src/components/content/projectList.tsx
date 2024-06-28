import { useEffect, useRef, useState } from "react";
import ProjectCard from "../card/ProjectCard.tsx";
import Loading from "../Loading.tsx";
import { getAllProjectEntity } from "../../test/TestVariables.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ProjectList() {

  const [isloading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  function loadProjects() {
    setLoading(true);
    
    setProjects([...projects,...getAllProjectEntity(20)]);
    setLoading(false);
    // getAllProjectEntity(20).then((newProjects) => {
    //   setProjects([...projects,...newProjects]);
    //   setLoading(false);
    // });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadProjects,[]);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({container: scrollRef});
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest >= 1) loadProjects();
  });

  return <main className="flex flex-1 overflow-y-auto justify-center max-h-[70vh]" ref={scrollRef}>
    <div className="container grid  gap-4 px-4 py-6 md:gap-8 md:px-6">
      {
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {projects.map((project) => <ProjectCard key={project.id} project={project}/>)}
      </div>
      }
      {isloading ? <Loading/>:null}
    </div>
  </main>;
}