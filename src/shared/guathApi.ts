import axios from "axios";
import { ApiBaseUrl } from "./api";

export const GauthOauthClientId = "872c10e9c0d74da18917049d033aa68e4a0edc5aeb0d4b7f97e28fe4a12da3c0";

export async function signup(accessCode: string):Promise<string> {
  return await axios.post(`${ApiBaseUrl}/api/user/signup?accessCode=${accessCode}`).then((res) => {
    if(res.status === 200 && typeof res.data === 'string'){
      return res.data;
    }
    throw new Error("Invalid response");
  });
}

export async function login(accessCode: string):Promise<string> {
  return await axios.post(`${ApiBaseUrl}/api/user/login/gauth?accessCode=${accessCode}`).then((res) => {
    if(res.status === 200 && typeof res.data === 'string'){
      return res.data;
    }
    throw new Error("Invalid response");
  });
}