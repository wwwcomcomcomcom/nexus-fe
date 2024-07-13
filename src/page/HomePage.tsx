import { useEffect, useState } from "react";
import { getAllProjectEntity } from "../shared/apiMockup.ts";
import { ProjectEntity } from "../entity/ProjectEntity.ts";
import { BestProjectList } from "../component/BestProjectList.tsx";
import Introduce from "../component/Introduce.tsx";
import AboutUs from "../component/AboutUs.tsx";
import Search from "../component/Search.tsx";

export default function HomeMain() {
  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  function loadProjects() {
    setProjects([...projects, ...getAllProjectEntity(20)]);
    // getAllProjectEntity(20).then((newProjects) => {
    //   setProjects([...projects,...newProjects]);
    // });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadProjects, []);

  return (
    <main>
      <Introduce />
      <Search />
      <BestProjectList projects={projects} />
      <AboutUs />
    </main>
  );
}
