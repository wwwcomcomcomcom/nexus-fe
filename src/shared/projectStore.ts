import { create } from "zustand";
import { ProjectEntity } from "../entity/ProjectEntity";

interface ProjectStore {
  projects: ProjectEntity[];
  addProject: (project: ProjectEntity) => void;
  addProjects: (projects: ProjectEntity[]) => void;
  removeProject: (projectId: string) => void;
  setProject: (project: ProjectEntity) => void;
  getProject: (projectId: string) => ProjectEntity | undefined;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  addProject: (project) => set({ projects: [...get().projects, project] }),
  addProjects: (projects) =>
    set({ projects: [...get().projects, ...projects] }),
  removeProject: (projectId) =>
    set({ projects: get().projects.filter((p) => p.id !== projectId) }),
  setProject: (project) =>
    set({
      projects: get().projects.map((p) => (p.id === project.id ? project : p)),
    }),
  getProject: (projectId) => get().projects.find((p) => p.id === projectId),
}));
