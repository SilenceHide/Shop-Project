import { IconBox, ImageView } from "@/components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function SingleProduct() {
  return (
    <main>
      <section className="container flex flex-col items-center mb-[68px] mt-[74px]">
        <div className="flex justify-center gap-10">
          <div className="max-w-[645px] w-full">
            <div className="mb-[28px] p-[40px] border-[1px] border-border-gray rounded-2xl">
              <div className="top-0 left-0 flex justify-end cursor-pointer">
                <IconBox icon="icon-search" size="text-[24px]" className="text-text-body-2 mb-20" />
              </div>
              <ImageView
                src={"/images/product/pic-01.png"}
                alt={"orange"}
                width={585}
                height={420}
                className={"w-11/12"}
              />
            </div>
            <div className="flex flex-row gap-2.5 justify-center items-center">
              <div className="product_slider-left-btn bg-brand-color-one rounded-full flex flex-row-reverse items-center p-2 cursor-pointer">
                <IconBox icon="icon-arrow-small-right" size="text-[24px]" className="rotate-180" />
              </div>

              <Swiper
                slidesPerView={2.1}
                spaceBetween={10}
                loop={true}
                navigation={{
                  prevEl: ".product_slider-left-btn",
                  nextEl: ".product_slider-right-btn ",
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
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="w-full"
              >
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-01.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"w-full"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-02.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"w-full"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-03.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"w-full"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-04.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"w-full"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-05.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"w-full"}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="product_slider-right-btn bg-brand-color-one rounded-full flex items-center p-2 cursor-pointer">
                <IconBox icon="icon-arrow-small-right" size="text-[24px]" />
              </div>
            </div>
          </div>
          <div className="max-w-[625px] w-[625px] border border-gray-200"></div>
        </div>
      </section>
    </main>
  );
}
