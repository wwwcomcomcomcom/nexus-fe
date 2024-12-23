import { MutableRefObject, useEffect, useState } from "react";
import ProjectCard from "./projectCard/ProjectCard.tsx";
import Loading from "./Loading.tsx";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  useMotionValue,
} from "framer-motion";
import { useProjectStore } from "../shared/projectStore.ts";
import { useSearchParams } from "react-router-dom";
import { fetchProjectsByPage } from "../shared/proejctApi.ts";
import { useNavigate } from "react-router-dom";

export default function ProjectList({
  scrollRef,
}: {
  scrollRef: MutableRefObject<null | HTMLDivElement>;
}) {
  const [query] = useSearchParams();
  const page = Number(query.get("page")) || 0;
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const projectStore = useProjectStore();
  const navigate = useNavigate();

  function loadProjects() {
    setLoading(true);
    setError(null);
    fetchProjectsByPage(page)
      .then((projects) => {
        if (projects.length === 0 && page > 0) {
          setError("더 이상 프로젝트가 없어요 :(");
          navigate("/projects?page=0");
          return;
        }
        projectStore.addProjects(projects);
      })
      .catch((e) => {
        console.error(e);
        if (e.response?.status === 404) {
          setError("요청하신 페이지를 찾을 수 없어요");
          navigate("/projects?page=0");
        } else {
          setError("프로젝트를 불러오는데 실패했어요 ㅠㅠ");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function resetScroll() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    loadProjects();
    resetScroll();
  }, [page]);

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

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

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
        <div className="grid px-4 py-6 md:px-6 justify-center w-full">
          {error && (
            <div className="text-center text-red-500 mb-4">{error}</div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <ProjectCard
              project={{
                id: "new",
                title: "새 프로젝트",
                state: "CREATED",
                description: "",
                githubUrl: "",
              }}
              isCreateCard={true}
              onClick={() => navigate("/createProject")}
            />
            {Object.values(projectStore.projects).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project.id)}
              />
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
