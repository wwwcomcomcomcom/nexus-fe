import {create} from "zustand";

interface UserStore {
  isLogin: boolean;
  accessToken: string|undefined;
  user:{[keyof:string]:unknown};
  setLogin: (isLogin: boolean,accessToken:string) => void;
  setUser: (user: {[keyof:string]:unknown}) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  isLogin: false,
  accessToken: undefined,
  user:{},
  setLogin: (isLogin,accessToken) => set({ isLogin,accessToken }),
  setUser: (user) => set({ user }),
}));