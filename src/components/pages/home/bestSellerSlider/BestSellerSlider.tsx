import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageView, Rating } from "@/components/common";
import Link from "next/link";
import { BestSellerSlide } from "./bestSellerSlide/BestSellerSlide";

interface Props {
  sliderData: Array<any>;
}

export function BestSellerSlider({ sliderData }: Props) {
  return (
    <>
      <h2 className="our-offers_section-title font-bold md:text-3xl text-base">Our Offers</h2>
      <div className="our-offers_wrapper md:mt-12 mt-5 flex gap-[20px] items-center">
        <div className="our-offers_banner-wrapper overflow-hidden rounded-[20px] relative hidden lg:block min-w-[378px]">
          <h3 className="our-offers_banner-title absolute font-bold text-[40px] max-w-[265px] left-12 top-9">
            Bring nature into your home
          </h3>
          <div className="our-offers_banner-img_wrapper bg-brand-color-one">
            <ImageView
              className={"our-offers_banner object-cover"}
              src={"/images/section4/Rectangle 26.png"}
              alt={"rectangle"}
              width={378}
              height={512}
            />
          </div>
          <Link
            href="#"
            className="our-offers_banner-shop_btn absolute flex items-center left-12 bottom-12 text-white bg-brand-color-one hover:bg-brand-color-two gap-2 px-4 py-2 rounded transition-all"
          >
            <p className="our-offers_banner-btn_title font-bold text-xs">Shop Now</p>
            <ImageView
              className={"our-offers_banner-btn_icon"}
              src={"/images/section4/fi-rs-arrow-small-right 1.svg"}
              alt={"arrow"}
              width={11}
              height={11}
            />
          </Link>
        </div>
        <Swiper
          slidesPerView={2.1}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              loop: false,
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="our-offers_slider w-full"
        >
          {sliderData.map((slideData, index) => {
            return (
              <SwiperSlide
                key={index}
                className="our-offer-slide md:h-[512px] overflow-hidden border border-[#e5e5e5] hover:border-brand-color-one md:p-5 p-3 rounded-2xl relative transition-all"
              >
                <BestSellerSlide data={slideData} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
