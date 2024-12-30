import axios from "axios";
import { ApiBaseUrl } from "../../shared/apiConfig";

//TODO:impl createProjectApi
//TODO:move createProjectDto from projectFormStore
export interface CreateProjectDto {
  title: string;
  subtitle?: string;
  description: string;
  githubUrl?: string;
  owner: number;
  wanted: {
    role: string;
    neededMemberCount: number;
    stack?: string[];
  }[];
}

export function submitProjectData(projectData: CreateProjectDto) {
  return axios.post(`${ApiBaseUrl}/api/project`, projectData).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    throw new Error("프로젝트 생성 실패");
  });
}
