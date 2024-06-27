import {create} from "zustand";
interface UserStore {
  user:{[keyof:string]:unknown};
  setUser: (user: {[keyof:string]:unknown}) => void;
}
export const useUserStore = create<UserStore>((set) => ({
  user: {},
  setUser: (user) => set({user}),
}));