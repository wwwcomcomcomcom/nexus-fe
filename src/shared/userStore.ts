import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserStore {
  user:{[keyof:string]:unknown};
  setUser: (user: {[keyof:string]:unknown}) => void;
  isLogin: () => boolean;
}
export const useUserStore = create(
  persist<UserStore>(
    (set,get) => ({
      user: {},
      isLogin: ()=> get().user.name !== undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(()=>sessionStorage),
    }
  )
);