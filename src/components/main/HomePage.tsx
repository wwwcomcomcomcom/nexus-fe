import { useEffect, useState } from "react";
import { getAllProjectEntity } from "../../test/TestVariables.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import { BestProjectList } from "../content/BestProjectList.tsx";
import Introduce from "./Introduce.tsx";

export default function HomeMain() {

  const [projects, setProjects] = useState<ProjectEntity[]>([]);


  function loadProjects() {
    setProjects([...projects,...getAllProjectEntity(20)]);
    // getAllProjectEntity(20).then((newProjects) => {
    //   setProjects([...projects,...newProjects]);
    // });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadProjects,[]);

  return <main>
    <Introduce/>
    <BestProjectList projects={projects}/>
  </main>;
}