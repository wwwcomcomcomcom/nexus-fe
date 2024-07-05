import { create } from "zustand";
import { CreateProjectDto } from "./createProjectApi";

export interface NewProjectStore extends CreateProjectDto {
  setProjectForm: (projectForm:Partial<NewProjectStore>) => void;
}

export const useProjectFormStore = create<NewProjectStore>(
  (set,get) => ({
    name: "",
    description: "",
    frontend: 0,
    backend: 0,
    android: 0,
    ios: 0,
    flutter: 0,
    ai: 0,
    design: 0,
    setProjectForm: (projectForm:Partial<NewProjectStore>) => set({...get(),...projectForm }),
  }),
);