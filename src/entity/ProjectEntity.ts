import { Status } from "../component/projectCard/projectStatus";

export interface ProjectEntity {
  id: string;
  name: string;
  description: string;
  status: Status;
  githubUrl: string;
}