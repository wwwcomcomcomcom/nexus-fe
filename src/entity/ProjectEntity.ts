import { Status } from "../component/Card/projectStatus";

export interface ProjectEntity {
  id: string;
  title: string;
  description: string;
  state: Status;
  githubUrl: string;
}
