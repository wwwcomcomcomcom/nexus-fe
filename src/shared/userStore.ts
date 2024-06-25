import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getUserData } from "./api";

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

interface UserStore {
  user:{[keyof:string]:unknown};
  setUser: (user: {[keyof:string]:unknown}) => void;
}
export const useUserStore = create<UserStore>((set) => ({
  user: {},
  setUser: (user) => set({user}),
}));

export async function findUserData(user: {[key:string]:unknown},token: string):Promise<{[key:string]:unknown}> {
  if(user.login !== undefined){
    return Promise.resolve(user);
  }
  return await getUserData(token);
}