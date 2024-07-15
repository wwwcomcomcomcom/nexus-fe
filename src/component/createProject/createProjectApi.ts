import axios from "axios";
import { ApiBaseUrl } from "../../shared/api";

//TODO:impl createProjectApi
//TODO:move createProjectDto from projectFormStore
export interface CreateProjectDto {
  name: string;
  description: string;
  //wanted roles
  frontend: number;
  backend: number;
  android: number;
  ios: number;
  flutter: number;
  ai: number;
  design: number;
}
export function submitProjectData(projectData: CreateProjectDto) {
  axios
    .post(`${ApiBaseUrl}/api/project`, projectData)
    .then((res) => {
      if (res.status === 200) {
        console.log("Project created");
      }
    })
    .catch((e) => {
      console.log(e);
    });
  //axios
  return null;
}
