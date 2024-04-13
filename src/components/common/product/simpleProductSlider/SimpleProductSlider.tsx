import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SimpleProductCard } from "@/components";
import { Navigation } from "swiper/modules";

interface Props {
  prevSlide?: string;
  nextSlide?: string;
}

export function SimpleProductSlider({ prevSlide, nextSlide }: Props) {
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
        <SwiperSlide className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden px-5 pb-5 md:pt-14 transition-all">
          <SimpleProductCard />
        </SwiperSlide>
        <SwiperSlide className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden px-5 pb-5 md:pt-14 transition-all">
          <div className="product_label-wrapper absolute z-10 bg-danger-color text-white font-lato text-xs py-[10px] px-4 left-0 md:top-5 top-0 rounded-r-full min-w-[64px] flex justify-center items-center">
            <p className="product_label">Hot</p>
          </div>
          <div className="product_img-wrapper relative flex items-center justify-center md:mt-3 md:max-w-[245px] max-w-[150px] md:min-h-[146px] min-h-[120px] max-h-[146px]">
            <img
              className="product_img bg-cover bg-center bg-no-repeat"
              src="../images/section3/fruit02.png"
              alt="fruit"
            />
            <div className="product_icons-wrapper flex opacity-0 invisible pointer-events-none absolute bg-white rounded-md h-8 w-[108px] items-center justify-center gap-[10px] transition-all border border-brand-color-one">
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-heart 1.svg"
                  alt="heart"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-shuffle 1.svg"
                  alt="shuffle"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img className="product_icon" src="../images/section3/fi-rs-eye 1.svg" alt="eye" />
              </div>
            </div>
          </div>
          <div className="product_content">
            <p className="hodo_foods font-lato text-xs text-text-body md:mt-5">Hodo Foods</p>
            <h3 className="product_title font-bold md:text-sm text-xs my-1 h-[48px] text-ellipsis overflow-hidden">
              All Natural Italian-Style Chicken Meatballs
            </h3>
            <div className="product_rate-wrapper flex">
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/001-empty star.svg"
                alt="star"
              />
              <p className="product_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
            </div>
            <h5 className="product_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
            <div className="product_price-wrapper flex items-center justify-between">
              <p className="product_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                $2.51
                <span className="product_price-discount line-through text-xs text-text-body">
                  $2.80
                </span>
              </p>
              <div className="product_add-btn_wrapper">
                <button
                  className="product_add-btn flex items-center justify-center gap-2 md:w-16 w-9 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one"
                  type="button"
                >
                  <span className="product_add-span hidden md:inline-block">Add</span>
                  <img src="../images/section3/fi-rs-plus-small 1.svg" alt="plus" />
                </button>
                <input
                  type="number"
                  name="number"
                  min="1"
                  value="1"
                  className="product_price-input md:max-w-16 max-w-9 hidden text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:pl-4 pl-2 font-bold text-sm py-1 h-[32px]"
                  max="100"
                  maxLength={3}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden px-5 pb-5 md:pt-14 transition-all">
          <div className="product_label-wrapper absolute z-10 bg-warning-color text-white font-lato text-xs py-[10px] px-4 left-0 md:top-5 top-0 rounded-r-full min-w-[64px] flex justify-center items-center">
            <p className="product_label">Sale</p>
          </div>
          <div className="product_img-wrapper relative flex items-center justify-center md:mt-3 md:max-w-[245px] max-w-[150px] md:min-h-[146px] min-h-[120px] max-h-[146px]">
            <img
              className="product_img bg-cover bg-center bg-no-repeat"
              src="../images/section3/fruit03.png"
              alt="fruit"
            />
            <div className="product_icons-wrapper flex opacity-0 invisible pointer-events-none absolute bg-white rounded-md h-8 w-[108px] items-center justify-center gap-[10px] transition-all border border-brand-color-one">
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-heart 1.svg"
                  alt="heart"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-shuffle 1.svg"
                  alt="shuffle"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img className="product_icon" src="../images/section3/fi-rs-eye 1.svg" alt="eye" />
              </div>
            </div>
          </div>
          <div className="product_content">
            <p className="hodo_foods font-lato text-xs text-text-body md:mt-5">Hodo Foods</p>
            <h3 className="product_title font-bold md:text-sm text-xs my-1 h-[48px] text-ellipsis overflow-hidden">
              Angie’s Boomchickapop Sweet & Salty Kettle Corn
            </h3>
            <div className="product_rate-wrapper flex">
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/001-empty star.svg"
                alt="star"
              />
              <p className="product_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
            </div>
            <h5 className="product_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
            <div className="product_price-wrapper flex items-center justify-between">
              <p className="product_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                $2.51
                <span className="product_price-discount line-through text-xs text-text-body">
                  $2.80
                </span>
              </p>
              <div className="product_add-btn_wrapper">
                <button
                  className="product_add-btn flex items-center justify-center gap-2 md:w-16 w-9 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one"
                  type="button"
                >
                  <span className="product_add-span hidden md:inline-block">Add</span>
                  <img src="../images/section3/fi-rs-plus-small 1.svg" alt="plus" />
                </button>
                <input
                  type="number"
                  name="number"
                  min="1"
                  value="1"
                  className="product_price-input md:max-w-16 max-w-9 hidden text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:pl-4 pl-2 font-bold text-sm py-1 h-[32px]"
                  max="100"
                  maxLength={3}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden px-5 pb-5 md:pt-14 transition-all">
          <div className="product_img-wrapper relative flex items-center justify-center md:mt-3 md:max-w-[245px] max-w-[150px] md:min-h-[146px] min-h-[120px] max-h-[146px]">
            <img
              className="product_img bg-cover bg-center bg-no-repeat"
              src="../images/section3/fruit04.png"
              alt="fruit"
            />
            <div className="product_icons-wrapper flex opacity-0 invisible pointer-events-none absolute bg-white rounded-md h-8 w-[108px] items-center justify-center gap-[10px] transition-all border border-brand-color-one">
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-heart 1.svg"
                  alt="heart"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-shuffle 1.svg"
                  alt="shuffle"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img className="product_icon" src="../images/section3/fi-rs-eye 1.svg" alt="eye" />
              </div>
            </div>
          </div>
          <div className="product_content">
            <p className="hodo_foods font-lato text-xs text-text-body md:mt-5">Hodo Foods</p>
            <h3 className="product_title font-bold md:text-sm text-xs my-1 h-[48px] text-ellipsis overflow-hidden">
              Foster Farms Takeout Crispy Classic Buffalo Wings
            </h3>
            <div className="product_rate-wrapper flex">
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/001-empty star.svg"
                alt="star"
              />
              <p className="product_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
            </div>
            <h5 className="product_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
            <div className="product_price-wrapper flex items-center justify-between">
              <p className="product_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                $2.51
                <span className="product_price-discount line-through text-xs text-text-body">
                  $2.80
                </span>
              </p>
              <div className="product_add-btn_wrapper">
                <button
                  className="product_add-btn flex items-center justify-center gap-2 md:w-16 w-9 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one"
                  type="button"
                >
                  <span className="product_add-span hidden md:inline-block">Add</span>
                  <img src="../images/section3/fi-rs-plus-small 1.svg" alt="plus" />
                </button>
                <input
                  type="number"
                  name="number"
                  min="1"
                  value="1"
                  className="product_price-input md:max-w-16 max-w-9 hidden text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:pl-4 pl-2 font-bold text-sm py-1 h-[32px]"
                  max="100"
                  maxLength={3}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden px-5 pb-5 md:pt-14 transition-all">
          <div className="product_img-wrapper relative flex items-center justify-center md:mt-3 md:max-w-[245px] max-w-[150px] md:min-h-[146px] min-h-[120px] max-h-[146px]">
            <img
              className="product_img bg-cover bg-center bg-no-repeat"
              src="../images/section3/fruit05.png"
              alt="fruit"
            />
            <div className="product_icons-wrapper flex opacity-0 invisible pointer-events-none absolute bg-white rounded-md h-8 w-[108px] items-center justify-center gap-[10px] transition-all border border-brand-color-one">
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-heart 1.svg"
                  alt="heart"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img
                  className="product_icon"
                  src="../images/section3/fi-rs-shuffle 1.svg"
                  alt="shuffle"
                />
              </div>
              <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
              <div className="product_icon-wrapper cursor-pointer">
                <img className="product_icon" src="../images/section3/fi-rs-eye 1.svg" alt="eye" />
              </div>
            </div>
          </div>
          <div className="product_content">
            <p className="hodo_foods font-lato text-xs text-text-body md:mt-5">Hodo Foods</p>
            <h3 className="product_title font-bold md:text-sm text-xs my-1 h-[48px] text-ellipsis overflow-hidden">
              Blue Diamond Almonds Lightly Salted Vegetables
            </h3>
            <div className="product_rate-wrapper flex">
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/002-fill star.svg"
                alt="star"
              />
              <img
                className="product_rate-img"
                src="../images/section3/001-empty star.svg"
                alt="star"
              />
              <p className="product_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
            </div>
            <h5 className="product_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
            <div className="product_price-wrapper flex items-center justify-between">
              <p className="product_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                $2.51
                <span className="product_price-discount line-through text-xs text-text-body">
                  $2.80
                </span>
              </p>
              <div className="product_add-btn_wrapper">
                <button
                  className="product_add-btn flex items-center justify-center gap-2 md:w-16 w-9 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one"
                  type="button"
                >
                  <span className="product_add-span hidden md:inline-block">Add</span>
                  <img src="../images/section3/fi-rs-plus-small 1.svg" alt="plus" />
                </button>
                <input
                  type="number"
                  name="number"
                  min="1"
                  value="1"
                  className="product_price-input md:max-w-16 max-w-9 hidden text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:pl-4 pl-2 font-bold text-sm py-1 h-[32px]"
                  max="100"
                  maxLength={3}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
