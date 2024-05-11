import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { DealsSlide } from "./dealsOfTheDaySlide";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  sliderData: Array<EntityType<ProductType>>;
}

export function DealsSlider({ sliderData }: Props) {
  return (
    <>
      <h2 className="deals_title font-bold md:text-3xl text-base">Deals Of The Day</h2>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          540: {
            slidesPerView: 1.3,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1536: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="deals_slider md:mt-12 mt-5 "
      >
        {sliderData.map((slideData, index) => {
          return (
            <SwiperSlide key={index} className="deals-slide ">
              <DealsSlide data={slideData} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
