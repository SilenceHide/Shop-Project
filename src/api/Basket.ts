import { ApiResponseSingleType, BasketType } from "@/types";
import apiClient from "./config/ApiClient";

export async function basketApiCall(): Promise<ApiResponseSingleType<BasketType>> {
  return await apiClient.get("/my-basket");
}
