import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CategoryVerticalList } from "@/components/common";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { getAllProductsApiCall } from "@/api/Product";

export function CategorySlider() {
  const { data: topSellingData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "top-selling"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        filters: { is_top_selling: { $notNull: true } },
        pagination: {
          withCount: false,
          start: 12,
          limit: 3,
        },
      }),
  });

  const { data: trendingProductData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "trending"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        filters: { is_trending: { $notNull: true } },
        pagination: {
          withCount: false,
          start: 1,
          limit: 3,
        },
      }),
  });

  const { data: recentlyAddedData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "recently-added"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        pagination: {
          withCount: false,
          page: 1,
          pageSize: 3,
        },
      }),
  });

  const { data: topRatedData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "top-rated"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        sort: ["rate:desc"],
        pagination: {
          withCount: false,
          page: 1,
          pageSize: 3,
        },
      }),
  });

  return (
    <Swiper
      slidesPerView={1.15}
      spaceBetween={25}
      loop={true}
      breakpoints={{
        540: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1536: {
          loop: false,
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
      className="category_slider"
    >
      <SwiperSlide className="category-slide ">
        {topSellingData && (
          <CategoryVerticalList title={"Top Selling"} sliderData={topSellingData.data} />
        )}
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        {trendingProductData && (
          <CategoryVerticalList title={"Trending Products"} sliderData={trendingProductData.data} />
        )}
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        {recentlyAddedData && (
          <CategoryVerticalList title={"Recently added"} sliderData={recentlyAddedData.data} />
        )}
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        {topRatedData && (
          <CategoryVerticalList title={"Top Rated"} sliderData={topRatedData.data} />
        )}
      </SwiperSlide>
    </Swiper>
  );
}
