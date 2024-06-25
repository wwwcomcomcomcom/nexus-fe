import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  accessToken: string|undefined;
  setAccessToken: (token: string) => void;
  isLogin: () => boolean;
}

export const useTokenStore = create(
  persist<UserStore>(
    (set,get) => ({
      accessToken: undefined,
      setAccessToken: (token) => set({accessToken: token}),
      isLogin: () => get().accessToken !== undefined,
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(()=>sessionStorage)
    }
  )
);