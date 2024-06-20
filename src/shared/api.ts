import axios from 'axios';

export const OauthClientId = "Ov23liUtVGUymJiEuINj";
//this is default vite port (But for proxy)
export const ApiBaseUrl = "http://localhost:5173";

export function getUserData(accessToken: string) {
  return axios.get(`https://api.github.com/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-GitHub-Api-Version": "2022-11-28"
    },
  }).then((res) => {
    console.log(res.data);
  });
}
