import { ApiResponseSingleType, ApiResponseType } from "@/types";
import apiClient from "./config/ApiClient";
import { ProductType } from "@/types/api/Product";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallery">;
  filters?: {};
  sort?: Array<string>;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
    total?: number;
    pageCount?: number;
  };
}

interface ProductID {
  productID: string | string[] | undefined;
  populate?: Array<"categories" | "thumbnail" | "gallery">;
}

export function getAllProductsApiCall({
  populate,
  filters = {},
  sort = [],
  pagination = {},
}: Props): Promise<ApiResponseType<ProductType>> {
  return apiClient.get("/products", {
    params: {
      populate: populate?.join(","),
      filters: filters,
      sort: sort,
      pagination: pagination,
    },
  });
}

export function getProduct({
  productID,
  populate,
}: ProductID): Promise<ApiResponseSingleType<ProductType>> {
  return apiClient.get(`/products/${productID}`, {
    params: {
      populate: populate?.join(","),
    },
  });
}
