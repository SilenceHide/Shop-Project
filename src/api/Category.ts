import { ApiResponseType, CategoryType } from "@/types";
import apiClient from "./config/ApiClient";

export function getFeaturedCategoryApiCall(): Promise<ApiResponseType<CategoryType>> {
  return apiClient.get("/categories", {
    params: {
      populate: "thumbnail",
      filters: {
        is_featured: {
          $eq: true,
        },
      },
    },
  });
}
