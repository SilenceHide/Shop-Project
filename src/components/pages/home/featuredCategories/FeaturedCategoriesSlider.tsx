import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import { ImageView } from "@/components";

export function FeaturedCategoriesSlider() {
  return (
    <div className="featured-categories_items lg:mt-[75px] mt-8">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={20}
        autoplay={true}
        loop={true}
        breakpoints={{
          540: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="featured-categories_swiper"
      >
        <SwiperSlide className="featured-categories_slider flex flex-col justify-between bg-[#F0E8D5] relative rounded-xl lg:pl-12 pl-9 lg:max-w-[512px] max-w-[342px] lg:min-h-[300px] min-h-[200px] lg:max-h-[300px] max-h-[200px]  overflow-hidden">
          <p className="category-item_title font-bold lg:text-2xl lg:max-w-60 max-w-44 xl:mt-16 mt-12">
            Everyday Fresh & Clean with Our Products
          </p>
          <Link
            href="#"
            className="category-item_link font-bold text-white text-xs flex items-center justify-between max-w-[110px] bg-brand-color-one hover:bg-brand-color-two transition-all px-4 py-2 rounded lg:mb-20 sm:mb-6 mb-8"
          >
            <p className="category-item_link-title">Shop Now</p>
            <ImageView
              className={"category-item_link-arrow flex items-center justify-center"}
              src={"/images/slider-arrows/fi-rs-arrow-small-right 2.png"}
              alt={"cat"}
              width={11}
              height={11}
            />
          </Link>
          <div className="category-item_img-wrapper absolute right-0 bottom-0 -z-10 max-w-[160px] xs:max-w-[250px] sm:max-w-[160px] xl:max-w-[250px] 2xl:max-w-max">
            <ImageView
              className={"category-item_img"}
              src={"/images/section2/Cms-01.png"}
              alt={"cms"}
              width={265}
              height={223}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="featured-categories_slider flex flex-col justify-between bg-[#F3E8E8] relative rounded-xl lg:pl-12 pl-9 lg:max-w-[512px] max-w-[342px] lg:min-h-[300px] min-h-[200px] lg:max-h-[300px] max-h-[200px]  overflow-hidden">
          <p className="category-item_title font-bold lg:text-2xl xl:max-w-64 lg:max-w-60 max-w-44 xl:mt-16 mt-12">
            Make your Breakfast Healthy and Easy
          </p>
          <Link
            href="#"
            className="category-item_link font-bold text-white text-xs flex items-center justify-between max-w-[110px] bg-brand-color-one hover:bg-brand-color-two transition-all px-4 py-2 rounded lg:mb-20 sm:mb-6 mb-8"
          >
            <p className="category-item_link-title">Shop Now</p>
            <ImageView
              className={"category-item_link-arrow flex items-center justify-center"}
              src={"/images/slider-arrows/fi-rs-arrow-small-right 2.png"}
              alt={"cat"}
              width={11}
              height={11}
            />
          </Link>
          <div className="category-item_img-wrapper absolute right-0 bottom-0 -z-10 max-w-[136px] xs:max-w-[160px] sm:max-w-[136px] xl:max-w-[180px] 2xl:max-w-max">
            <ImageView
              className={"category-item_img"}
              src={"/images/section2/Cms-02.png"}
              alt={"cms"}
              width={204}
              height={252}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="featured-categories_slider flex flex-col justify-between bg-[#E7EAF3] relative rounded-xl lg:pl-12 pl-9 lg:max-w-[512px] max-w-[342px] lg:min-h-[300px] min-h-[200px] lg:max-h-[300px] max-h-[200px]  overflow-hidden">
          <p className="category-item_title font-bold lg:text-2xl lg:max-w-60 max-w-44 xl:mt-16 mt-12">
            The best Organic Products Online
          </p>
          <Link
            href="#"
            className="category-item_link font-bold text-white text-xs flex items-center justify-between max-w-[110px] bg-brand-color-one hover:bg-brand-color-two transition-all px-4 py-2 rounded lg:mb-20 sm:mb-6 mb-8"
          >
            <p className="category-item_link-title">Shop Now</p>
            <ImageView
              className={"category-item_link-arrow flex items-center justify-center"}
              src={"/images/slider-arrows/fi-rs-arrow-small-right 2.png"}
              alt={"cat"}
              width={11}
              height={11}
            />
          </Link>
          <div className="category-item_img-wrapper absolute right-0 bottom-0 -z-10 max-w-[160px] xs:max-w-[250px] sm:max-w-[160px] xl:max-w-[250px] 2xl:max-w-max">
            <ImageView
              className={"category-item_img"}
              src={"/images/section2/Cms-03.png"}
              alt={"cms"}
              width={262}
              height={200}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
