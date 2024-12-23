import { create } from "zustand";
import { createPostDto } from "./createPostApi";

export interface NewPostStore extends createPostDto {
  setProjectForm: (projectForm: Partial<NewPostStore>) => void;
}

export const usePostFormStore = create<NewPostStore>((set, get) => ({
  title: "",
  content: "",
  author: "",
  setProjectForm: (postForm: Partial<NewPostStore>) =>
    set({ ...get(), ...postForm }),
}));
