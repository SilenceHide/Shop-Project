import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import { IconBox, ImageView } from "@/components";
import { miniProductSlider } from "@/mock/miniProductSlider";

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
        {miniProductSlider.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{ backgroundColor: `${item.color}` }}
              className={`featured-categories_slider flex flex-col justify-between relative rounded-xl lg:pl-12 pl-9 lg:max-w-[512px] max-w-[342px] lg:min-h-[300px] min-h-[200px] lg:max-h-[300px] max-h-[200px] overflow-hidden`}
            >
              <p className="category-item_title font-bold lg:text-2xl lg:max-w-60 max-w-44 xl:mt-16 mt-12">
                {item.title}
              </p>
              <Link
                href="/category"
                target="_blank"
                className="category-item_link font-bold text-white text-xs flex items-center justify-between max-w-[110px] bg-brand-color-one hover:bg-brand-color-two transition-all px-4 py-2 rounded lg:mb-20 sm:mb-6 mb-8"
              >
                <p className="category-item_link-title">Shop Now</p>
                <IconBox
                  icon={"icon-arrow-small-right"}
                  className={"category-item_link-arrow flex items-center justify-center"}
                  size={"text-[20px]"}
                />
              </Link>
              <div
                className={`category-item_img-wrapper absolute right-0 bottom-0 -z-10 max-w-[160px] xs:max-w-[${item.width}px] sm:max-w-[160px] xl:max-w-[250px] 2xl:max-w-max`}
              >
                <ImageView
                  className={"category-item_img"}
                  src={item.image}
                  alt={"cms"}
                  width={item.width}
                  height={item.height}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
