import axios from "axios";
import { useUserStore } from "./userStore";
import { useEffect } from "react";
import { ApiBaseUrl } from "./apiConfig";

export function useUpdatedUserStore() {
  const store = useUserStore();
  useEffect(() => {
    if (!store.isLogin()) {
      store.resetStore();
      return;
    }
    axios
      .get(`${ApiBaseUrl}/api/user/info`, {
        headers: { Authorization: `Bearer ${store.jwt!}` },
      })
      .then((res) => {
        if (res.status === 200 && res.data.name) {
          store.setUser(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return store;
}
