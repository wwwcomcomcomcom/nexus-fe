import { create } from "zustand";
import { CreateProjectDto } from "./createProjectApi";

export interface NewProjectStore {
  title: string;
  subtitle: string;
  description: string;
  githubUrl: string;
  frontend: number;
  backend: number;
  android: number;
  ios: number;
  flutter: number;
  ai: number;
  design: number;
  setProjectForm: (projectForm: Partial<NewProjectStore>) => void;
  toCreateProjectDto: (userId: number) => CreateProjectDto;
}

export const useProjectFormStore = create<NewProjectStore>((set, get) => ({
  title: "",
  subtitle: "",
  description: "",
  githubUrl: "",
  frontend: 0,
  backend: 0,
  android: 0,
  ios: 0,
  flutter: 0,
  ai: 0,
  design: 0,
  setProjectForm: (projectForm: Partial<NewProjectStore>) =>
    set({ ...get(), ...projectForm }),
  toCreateProjectDto: (userId: number) => {
    const store = get();
    const wanted = [];

    if (store.frontend > 0)
      wanted.push({ role: "frontend", neededMemberCount: store.frontend });
    if (store.backend > 0)
      wanted.push({ role: "backend", neededMemberCount: store.backend });
    if (store.android > 0)
      wanted.push({ role: "android", neededMemberCount: store.android });
    if (store.ios > 0)
      wanted.push({ role: "ios", neededMemberCount: store.ios });
    if (store.flutter > 0)
      wanted.push({ role: "flutter", neededMemberCount: store.flutter });
    if (store.ai > 0) wanted.push({ role: "ai", neededMemberCount: store.ai });
    if (store.design > 0)
      wanted.push({ role: "design", neededMemberCount: store.design });

    return {
      title: store.title,
      description: store.description,
      owner: userId,
      wanted,
    };
  },
}));
