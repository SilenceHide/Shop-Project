import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CategoryVerticalList } from "@/components/common";
import { TopSellingMock } from "@/mock/TopSelling";
import { TrendingProductsMock } from "@/mock/TrendingProducts";
import { RecentlyAddedMock } from "@/mock/RecentlyAdded";
import { TopRatedMock } from "@/mock/TopRated";

interface Props {}

export function CategorySlider() {
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
        <CategoryVerticalList title={"Top Selling"} data={TopSellingMock} />
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        <CategoryVerticalList title={"Trending Products"} data={TrendingProductsMock} />
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        <CategoryVerticalList title={"Recently added"} data={RecentlyAddedMock} />
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        <CategoryVerticalList title={"Top Rated"} data={TopRatedMock} />
      </SwiperSlide>
    </Swiper>
  );
}
