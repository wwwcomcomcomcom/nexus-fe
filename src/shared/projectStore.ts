import { create } from "zustand";
import { ProjectEntity } from "../entity/ProjectEntity";

interface ProjectStore {
  projects: { [keyof: string]: ProjectEntity };
  addProject: (project: ProjectEntity) => void;
  addProjects: (projects: ProjectEntity[]) => void;
  removeProject: (projectId: string) => void;
  setProject: (project: ProjectEntity) => void;
  getProject: (projectId: string) => ProjectEntity | undefined;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: {},
  addProject: (project) =>
    set({ projects: { ...get().projects, [project.id]: project } }),
  addProjects: (projects) => {
    const newProjects = projects.reduce(
      (acc, project) => ({ ...acc, [project.id]: project }),
      {}
    );
    set({ projects: { ...get().projects, ...newProjects } });
  },
  removeProject: (projectId) => {
    const projects = { ...get().projects };
    delete projects[projectId];
    set({ projects });
  },
  setProject: (project) =>
    set({ projects: { ...get().projects, [project.id]: project } }),
  getProject: (projectId) => get().projects[projectId],
}));
