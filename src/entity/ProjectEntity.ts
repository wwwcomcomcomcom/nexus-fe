import { Status } from "../component/projectCard/projectStatus";

export interface ProjectEntity {
  id: string;
  title: string;
  description: string;
  state: Status;
  githubUrl: string;
}
