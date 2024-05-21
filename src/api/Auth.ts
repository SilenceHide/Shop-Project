import { RegisterResponseType } from "@/types";
import apiClient from "./config/ApiClient";

interface Data {
  username: string;
  email: string;
  password: string;
}

export function registerApiCall(data: Data): Promise<RegisterResponseType> {
  return apiClient.post("/auth/local/register", data);
}
