import axios from "axios";
import { ApiBaseUrl } from "./apiConfig";
import { setToken } from "./tokenManager";

interface LoginResponse {
  token: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const login = async (loginData: LoginData) => {
  try {
    const response = await axios.post<LoginResponse>(`${ApiBaseUrl}/api/auth/login`, loginData);

    if (response.data.token) {
      setToken(response.data.token);
      return response.data;
    }
    throw new Error("토큰이 없습니다.");
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
