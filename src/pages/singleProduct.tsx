import { IconBox, ImageView, Rating } from "@/components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function SingleProduct() {
  return (
    <main>
      <section className="container flex flex-col items-center mb-[100px] mt-[74px]">
        <div className="product-info flex lg:flex-row flex-col justify-center lg:gap-10 gap-20">
          <div className="flex flex-col xl:max-w-[645px] lg:max-w-[445px] md:max-w-[645px] xs:max-w-[545px] max-w-[345px] w-full md:m-0 m-auto">
            <div className="mb-[28px] p-[40px] border-[1px] border-border-gray rounded-2xl max-h-[695px] h-full flex items-center justify-center relative xl:shrink-0">
              <div className="absolute top-[30px] right-[30px] flex justify-end cursor-pointer">
                <IconBox icon="icon-search" size="text-[24px]" className="text-text-body-2 mb-20" />
              </div>
              <ImageView
                src={"/images/product/pic-01.png"}
                alt={"orange"}
                width={585}
                height={420}
                className={"w-11/12 md:max-w-[585px] max-w-fit"}
              />
            </div>
            <div className="flex flex-row gap-2 justify-center items-center static">
              <div className="product_slider-left-btn bg-brand-color-one rounded-full flex flex-row-reverse items-center p-2 cursor-pointer">
                <IconBox icon="icon-arrow-small-right" size="text-[24px]" className="rotate-180" />
              </div>

              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                navigation={{
                  prevEl: ".product_slider-left-btn",
                  nextEl: ".product_slider-right-btn ",
                }}
                modules={[Navigation]}
                breakpoints={{
                  540: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
                className="xl:max-w-[645px] lg:max-w-[445px] md:max-w-[645px] xs:max-w-[545px] max-w-[345px] w-full"
              >
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-01.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"max-w-[110px] max-h-[100px]"}
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
                      className={"max-w-[110px] max-h-[100px]"}
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
                      className={"max-w-[110px] max-h-[100px]"}
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
                      className={"max-w-[110px] max-h-[100px]"}
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
                      className={"max-w-[110px] max-h-[100px]"}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="product_slider-right-btn bg-brand-color-one rounded-full flex items-center p-2 cursor-pointer">
                <IconBox icon="icon-arrow-small-right" size="text-[24px]" />
              </div>
            </div>
          </div>

          <div className="max-w-[625px] w-full flex flex-col gap-5 xl:shrink-0">
            <div className="bg-[#def9ec] w-[75px] h-[29px] flex items-center justify-center text-brand-color-one text-sm font-bold">
              In Stock
            </div>
            <h1 className="md:text-[40px] text-3xl text font-bold">
              Seeds of Change Organic Quinoa, Brown
            </h1>
            <div className="flex gap-0.5">
              <Rating rate={4} />
            </div>
            <div className="flex items-center gap-5">
              <p className="text-brand-color-one font-bold md:text-7xl text-5xl">$38</p>
              <p className="text-text-body-2 line-through font-bold md:text-[32px] text-2xl">$42</p>
            </div>
            <div className="flex flex-col font-lato md:text-lg text-text-body gap-6">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia,
                corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum
                eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
              </p>
              <p>
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much
                yikes off far quetzal goodness and from for grimaced goodness.
              </p>
            </div>
            <form action="#" className="flex items-center gap-2.5 mt-10">
              <div className="flex justify-center items-center focus-within:border-brand-color-one focus-within:border-[1.5px] focus-within:rounded-[7px] focus-within:text-brand-color-one text-text-body-2 border-[1.5px] border-text-body-2 rounded-[7px] h-[50px] md:max-w-[118px] max-w-[80px] px-4 py-2">
                <label htmlFor="price2" className="hidden"></label>
                <input
                  type="number"
                  id="price2"
                  min="1"
                  max="10"
                  name="price2"
                  placeholder="1"
                  className="product_input-number pl-4 flex justify-center items-center focus:outline-none font-bold"
                />
              </div>
              <button className="offer_add-btn w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 transition-all hover:bg-brand-color-two max-w-[175px] h-[50px]">
                <img
                  className="offer_add-btn_img"
                  src="../images/section4/fi-rs-shopping-cart.svg"
                  alt="shopping-cart"
                />
                <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
              </button>
            </form>
            <div className="md:text-lg font-lato mt-10">
              <p className="">
                SKU:
                <span className="text-text-body-2"> FWM15VKT</span>
              </p>
            </div>
          </div>
        </div>
        <div className="product-detail m-auto w-full max-w-[1180px] mt-[228px] border border-border-light h-[1000px] rounded-2xl"></div>
      </section>
    </main>
  );
}