import axios from "axios";
import { ApiBaseUrl } from "../../shared/apiConfig";
import { getToken } from "../../shared/tokenManager";

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
  const token = getToken();

  return axios
    .post(`${ApiBaseUrl}/api/project`, projectData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
      throw new Error("프로젝트 생성 실패");
    });
}
