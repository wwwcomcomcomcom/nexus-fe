import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TokenStore {
  accessToken: string|undefined;
  setAccessToken: (token: string) => void;
  isLogin: () => boolean;
}

export const useTokenStore = create(
  persist<TokenStore>(
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