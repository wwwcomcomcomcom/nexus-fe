import axios from "axios";

export const ApiBaseUrl = "http://localhost:5173";

export function getUserInfo(){
  axios.get(`${ApiBaseUrl}/api/user/info`).then((res) => {
    if(res.status === 200 && res.data.name){
      return res.data;
    }
    throw new Error(`Invalid response ${res.status}`);
  }).catch((e) => {
    throw new Error("Failed to get user info" + e.message);
  });
}