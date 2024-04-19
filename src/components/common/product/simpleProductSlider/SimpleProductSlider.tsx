import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SimpleProductCard } from "@/components";
import { Navigation } from "swiper/modules";

interface Props {
  sliderData: Array<any>;
  prevSlide?: string;
  nextSlide?: string;
}

export function SimpleProductSlider({ sliderData, prevSlide, nextSlide }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={2.1}
        spaceBetween={10}
        loop={true}
        navigation={{
          prevEl: prevSlide,
          nextEl: nextSlide,
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            loop: false,
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="popular-products_slider md:mt-11 mt-5"
      >
        {sliderData.map((slideData, index) => {
          return (
            <SwiperSlide
              key={index}
              className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden px-5 pb-5 md:pt-14 transition-all"
            >
              <SimpleProductCard data={slideData} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
