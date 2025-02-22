import { State } from "../component/projectCard/projectStatus";

export interface ProjectEntity {
  id: string;
  title: string;
  description: string;
  state: State;
  githubUrl: string;
  owner: number;
  members: number[];
  wanted: {
    role: string;
    neededMemberCount: number;
    stack: string[];
  }[];
}
