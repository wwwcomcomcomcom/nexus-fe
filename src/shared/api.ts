import axios from "axios";
import { useUserStore } from "./userStore";
import { useEffect } from "react";

export const ApiBaseUrl = "http://localhost:5173";

export function useUpdatedUserStore() {
  const store = useUserStore();
  useEffect(() => {
    if(!store.isLogin()){
      store.resetStore();
      return;
    }
    axios
      .get(`${ApiBaseUrl}/api/user/info`, {
        headers: { Authorization: `Bear ${store.jwt!}` },
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

// export function getUserInfo() {
//   axios
//     .get(`${ApiBaseUrl}/api/user/info`)
//     .then((res) => {
//       if (res.status === 200 && res.data.name) {
//         return res.data;
//       }
//       throw new Error(`Invalid response ${res.status}`);
//     })
//     .catch((e) => {
//       throw new Error("Failed to get user info" + e.message);
//     });
// }
