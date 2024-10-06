import { ProjectEntity } from "../entity/ProjectEntity";
import axios from "axios";
import { ApiBaseUrl } from "./apiConfig";

export function fetchProjectList(): Promise<ProjectEntity[]> {
  return axios.get(`${ApiBaseUrl}/api/project/`).then((res) => {
    if (res.status === 200 && Array.isArray(res.data)) {
      return res.data;
    }
    throw new Error("Invalid response");
  });
}
