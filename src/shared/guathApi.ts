import axios from "axios";

export const GauthOauthClientId = "872c10e9c0d74da18917049d033aa68e4a0edc5aeb0d4b7f97e28fe4a12da3c0";
const ApiBaseUrl = "http://localhost:5173";
export async function getAccessToken(code: string):Promise<string> {
  return await axios.get(`${ApiBaseUrl}/api/gauth/token?accessCode=${code}`).then((res) => {
    if(res.status === 200 && typeof res.data === 'string'){
      return res.data;
    }
    throw new Error("Invalid response");
  });
}
export async function getUserData(accessToken: string):Promise<{[key:string]:unknown}> {
  //todo: implement this
  throw new Error("Not implemented");
  // return await axios.get(`https://api.github.com/user`, {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //     "X-GitHub-Api-Version": "2022-11-28"
  //   },
  // }).then((res) => {
  //   return res.data as {[key:string]:unknown};
  // });
}