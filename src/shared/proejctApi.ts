import { ProjectEntity } from "../entity/ProjectEntity";
import axios from "axios";
import { ApiBaseUrl } from "./apiConfig";

export function fetchProjectsByPage(page: number): Promise<ProjectEntity[]> {
  return axios.get(`${ApiBaseUrl}/api/project/page/${page}`).then((res) => {
    if (res.status === 200 && Array.isArray(res.data)) {
      return res.data;
    }
    throw new Error("Invalid response");
  });
}
export function fetchProject(projectId: string): Promise<ProjectEntity> {
  return axios.get(`${ApiBaseUrl}/api/project/${projectId}`).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    throw new Error("Invalid response");
  });
}
