import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectEntity } from "../../entity/ProjectEntity";
import RecruitingPage from "./RecruitingPage";
import { getProjectById } from "../../shared/apiMockup";
import InProgressPage from "./InProgressPage";
import CompletedPage from "./CompletedPage ";
import PausedPage from "./PausedPage";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectEntity | null>(null);

  useEffect(() => {
    if (id) {
      const fetchedProject = getProjectById(id);
      setProject(fetchedProject);
    }
  }, [id]);

  if (!project) {
    return <div>프로젝트 데이터를 불러오는 중...</div>;
  }

  switch (project.status) {
    case "진행중":
      return <InProgressPage project={project} />;
    case "모집중":
      return <RecruitingPage project={project} />;
    case "완료됨":
      return <CompletedPage project={project} />;
    case "중단됨":
      return <PausedPage project={project} />;
    default:
      return <div>알 수 없는 프로젝트 상태입니다.</div>;
  }
}
