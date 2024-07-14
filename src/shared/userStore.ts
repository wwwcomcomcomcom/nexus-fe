import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserStore {
  user: { [keyof: string]: unknown };
  jwt: string | undefined;
  setUser: (user: { [keyof: string]: unknown }) => void;
  setJwt: (jwt: string) => void;
  hasUserData: () => boolean;
  isLogin: () => boolean;
  resetStore: () => void;
}
export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      user: {},
      jwt: undefined,
      hasUserData: () => get().user.name !== undefined,
      setJwt: (jwt) => set({ jwt }),
      setUser: (user) => set({ user }),
      isLogin: () =>
        get().jwt !== undefined &&
        (parseJwt(get().jwt!).exp as number) > Math.floor(Date.now() / 1000),
      resetStore: () => set({ user: {}, jwt: undefined }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

function parseJwt(token: string): { [keyof: string]: unknown } {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
