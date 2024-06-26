import axios from 'axios';

export const GithubOauthClientId = "Ov23liUtVGUymJiEuINj";
//this is default vite port (But for proxy)
const ApiBaseUrl = "http://localhost:5173";


export async function getAccessToken(code: string):Promise<string> {
  return await axios.get(`${ApiBaseUrl}/api/oauth/login?accessCode=${code}`).then((res) => {
    if(res.status === 200 && typeof res.data === 'string'){
      return res.data;
    }
    throw new Error("Invalid response");
  });
}
export async function getUserData(accessToken: string):Promise<{[key:string]:unknown}> {
  return await axios.get(`https://api.github.com/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-GitHub-Api-Version": "2022-11-28"
    },
  }).then((res) => {
    return res.data as {[key:string]:unknown};
  });
}