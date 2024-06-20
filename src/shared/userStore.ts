import {create} from "zustand";

interface UserStore {
  isLogin: boolean;
  accessToken: string|undefined;
  setLogin: (isLogin: boolean,accessToken:string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  isLogin: false,
  accessToken: undefined,
  setLogin: (isLogin,accessToken) => set({ isLogin,accessToken }),
}));