import axios from 'axios';
import { ApiBaseUrl } from './api';

export const GithubOauthClientId = "Ov23liUtVGUymJiEuINj";

export async function login(accessCode: string):Promise<string> {
  return await axios.post(`${ApiBaseUrl}/api/user/login/github?accessCode=${accessCode}`).then((res) => {
    if(res.status === 200 && typeof res.data === 'string'){
      return res.data;
    }
    throw new Error("Invalid response");
  });
}