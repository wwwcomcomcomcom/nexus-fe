import axios from 'axios';

export const GithubOauthClientId = "Ov23liUtVGUymJiEuINj";
//this is default vite port (But for proxy)
const ApiBaseUrl = "http://localhost:5173";


export async function login(accessCode: string):Promise<string> {
  return await axios.get(`${ApiBaseUrl}/api/user/login/github?accessCode=${accessCode}`).then((res) => {
    if(res.status === 200 && typeof res.data === 'string'){
      return res.data;
    }
    throw new Error("Invalid response");
  });
}