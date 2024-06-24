import {create} from "zustand";

interface UserStore {
  accessToken: string|undefined;
  setAccessToken: (token: string) => void;
  isLogin: () => boolean;
  loadfromSession: () => void;
  saveToSession: () => void;
}

export const useUserStore = create<UserStore>((set,state) => ({
  accessToken: undefined,
  isLogin:()=>state().accessToken !== undefined,
  setAccessToken: (token: string) => {
    set({accessToken: token});
    state().saveToSession();
  },
  loadfromSession:()=>{
    const token = window.sessionStorage.getItem("accessToken");
    if(token){
      set({accessToken: token});
    }
  },
  saveToSession:()=>{
    window.sessionStorage.setItem("accessToken",state().accessToken!);
  }
}));