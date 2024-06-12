import { Status } from "../components/card/projectStatus";

export interface ProjectEntity {
  id: string;
  name: string;
  description: string;
  status: Status;
  githubUrl: string;
}