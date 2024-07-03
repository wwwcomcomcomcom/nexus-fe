import { create } from "zustand";

export interface ProjectFormDto {
  name: string;
  description: string;
  frontend: number;
  backend: number;
  android: number;
  ios: number;
  flutter: number;
  ai: number;
  design: number;
  setProjectForm: (projectForm:Partial<ProjectFormDto>) => void;
}

export const useProjectFormStore = create<ProjectFormDto>(
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
    setProjectForm: (projectForm:Partial<ProjectFormDto>) => set({...get(),...projectForm }),
  }),
);