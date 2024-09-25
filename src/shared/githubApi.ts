import axios from "axios";
import { ApiBaseUrl } from "./api";

export const GithubOauthClientId = "Ov23liUtVGUymJiEuINj";

/** @returns JWT by accessCode from gauth */
/** @requires save JWT token in UserStore */
export async function login(accessCode: string): Promise<string> {
  return await axios
    .post(`${ApiBaseUrl}/api/user/login/github?accessCode=${accessCode}`)
    .then((res) => {
      if (
        res.status === 200 &&
        res.headers.getAuthorization instanceof Function
      ) {
        const jwt = res.headers.getAuthorization()?.toString().split(" ")[1];
        if (jwt) {
          return jwt;
        }
        throw new Error("Invalid JWT response");
      }
      throw new Error(
        "response status is not 200 or getAuthorization is not a function"
      );
    });
}
export async function signup(accessCode: string) {
  return await axios
    .post(`${ApiBaseUrl}/api/user/signup/github?accessCode=${accessCode}`)
    .then((res) => {
      if (res.status === 200 && typeof res.data === "string") {
        return res.data;
      }
      throw new Error("Invalid response");
    });
}
