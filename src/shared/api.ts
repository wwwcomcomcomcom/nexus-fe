import axios from 'axios';

export const OauthClientId = "Ov23liUtVGUymJiEuINj";
//this is default vite port (But for proxy)
export const ApiBaseUrl = "http://localhost:5173";

export async function getUserData(accessToken: string):Promise<{[key:string]:never}> {
  console.log(accessToken);
  return await axios.get(`https://api.github.com/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-GitHub-Api-Version": "2022-11-28"
    },
  }).then((res) => {
    console.log(res.data);
    return res.data as {[key:string]:never};
  });
}
