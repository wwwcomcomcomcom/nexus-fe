import { useEffect, useState } from "react";
import { getAllProjectEntity } from "../../test/TestVariables.ts";
import { ProjectEntity } from "../../entity/ProjectEntity.ts";
import { BestProjectList } from "../content/BestProjectList.tsx";
import Introduce from "./introduce.tsx";
import { useUserStore } from "../../shared/userStore.ts";
import { getUserData } from "../../shared/api.ts";

export default function HomeMain() {

  const [projects, setProjects] = useState<ProjectEntity[]>([]);
  const {accessToken} = useUserStore((state) => state);

  function loadProjects() {
    getAllProjectEntity(20).then((newProjects) => {
      setProjects([...projects,...newProjects]);
    });
    accessToken !== undefined &&  getUserData(accessToken);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadProjects,[]);

  return <main>
    <Introduce/>
    <BestProjectList projects={projects}/>
  </main>;
}