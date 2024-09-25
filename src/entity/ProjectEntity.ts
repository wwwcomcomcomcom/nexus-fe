import { Status } from "../component/Card/projectStatus";

export interface ProjectEntity {
  id: string;
  name: string;
  description: string;
  status: Status;
  githubUrl: string;
}
