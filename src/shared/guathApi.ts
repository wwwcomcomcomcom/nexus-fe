import axios from "axios";
import { ApiBaseUrl } from "./api";

export const GauthOauthClientId =
  "8766b0ff0cf54ac0baa9af5ba384185647ecbf5ee8754cbeb799fd15f7b9b78b";

export async function signup(accessCode: string): Promise<string> {
  return await axios
    .post(`${ApiBaseUrl}/api/user/signup?accessCode=${accessCode}`)
    .then((res) => {
      if (res.status === 200 && typeof res.data === "string") {
        return res.data;
      }
      throw new Error("Invalid response");
    });
}

/** @returns JWT by accessCode from gauth */
/** @requires save JWT token in UserStore */
export async function login(accessCode: string): Promise<string> {
  return await axios
    .post(`${ApiBaseUrl}/api/user/login/gauth?accessCode=${accessCode}`)
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
