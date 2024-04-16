import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageView } from "@/components/common";
import Link from "next/link";

export function BestSellerSlider() {
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
          <SwiperSlide className="our-offer-slide md:h-[512px] overflow-hidden border border-[#e5e5e5] hover:border-brand-color-one md:p-5 p-3 rounded-2xl relative transition-all">
            <div className="offer_percentage-wrapper absolute text-white bg-danger-color top-0 md:top-5 left-0 min-w-[64px] py-[10px] px-4 rounded-r-full">
              <p className="offer-percentage font-lato text-xs">Save 25%</p>
            </div>
            <div className="offer_img-wrapper md:mt-16 flex items-center justify-center md:max-w-[245px] max-w-[160px] xs:max-w-[215px] sm:max-w-[250px] xs:min-h-[120px] min-h-[100px] lg:h-[135px]">
              <img
                className="offer_img object-cover bg-center bg-no-repeat bg-cover h-[80px] xs:h-[100px] sm:h-[110px] lg:h-full"
                src="../images/section4/product01.png"
                alt="product"
              />
            </div>
            <div className="offer_content">
              <p className="offer_hodo-foods font-lato text-xs text-text-body md:mt-5">
                Hodo Foods
              </p>
              <h3 className="offer_title font-bold md:text-sm text-xs my-1 h-[48px] overflow-hidden text-ellipsis">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h3>
              <div className="offer_rate-wrapper flex">
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/001-empty star.svg"
                  alt="star"
                />
                <p className="offer_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
              </div>
              <h5 className="offer_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
              <div className="offer_price-wrapper flex items-center justify-between">
                <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                  $2.51
                  <span className="offer_price-discount line-through text-xs text-text-body">
                    $2.80
                  </span>
                </p>
              </div>
              <div className="offer_sold-rate-wrapper mt-4">
                <div className="offer_sold-rate h-1 bg-[#e5e5e5] after:bg-brand-color-one after:w-3/4 relative after:absolute after:top-0 after:bottom-0 rounded-sm after:rounded-sm"></div>
                <p className="offer_sold font-lato text-xs mt-[6px]">Sold: 90/120</p>
              </div>
              <button className="offer_add-btn min-w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 mt-6 transition-all hover:bg-brand-color-two">
                <img
                  className="offer_add-btn_img"
                  src="../images/section4/fi-rs-shopping-cart.svg"
                  alt="shopping-cart"
                />
                <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="our-offer-slide md:h-[512px] overflow-hidden border border-[#e5e5e5] hover:border-brand-color-one md:p-5 p-3 rounded-2xl relative transition-all">
            <div className="offer_percentage-wrapper absolute text-white bg-danger-color top-0 md:top-5 left-0 min-w-[64px] py-[10px] px-4 rounded-r-full">
              <p className="offer-percentage font-lato text-xs">Save 25%</p>
            </div>
            <div className="offer_img-wrapper md:mt-16 flex items-center justify-center md:max-w-[245px] max-w-[160px] xs:max-w-[215px] sm:max-w-[250px] xs:min-h-[120px] min-h-[100px] lg:h-[135px]">
              <img
                className="offer_img object-cover bg-center bg-no-repeat bg-cover h-[80px] xs:h-[100px] sm:h-[110px] lg:h-full"
                src="../images/section4/product02.png"
                alt="product"
              />
            </div>
            <div className="offer_content">
              <p className="offer_hodo-foods font-lato text-xs text-text-body md:mt-5">
                Hodo Foods
              </p>
              <h3 className="offer_title font-bold md:text-sm text-xs my-1 h-[48px] overflow-hidden text-ellipsis">
                All Natural Italian-Style Chicken Meatballs
              </h3>
              <div className="offer_rate-wrapper flex">
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/001-empty star.svg"
                  alt="star"
                />
                <p className="offer_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
              </div>
              <h5 className="offer_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
              <div className="offer_price-wrapper flex items-center justify-between">
                <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                  $2.51
                  <span className="offer_price-discount line-through text-xs text-text-body">
                    $2.80
                  </span>
                </p>
              </div>
              <div className="offer_sold-rate-wrapper mt-4">
                <div className="offer_sold-rate h-1 bg-[#e5e5e5] after:bg-brand-color-one after:w-3/4 relative after:absolute after:top-0 after:bottom-0 rounded-sm after:rounded-sm"></div>
                <p className="offer_sold font-lato text-xs mt-[6px]">Sold: 90/120</p>
              </div>
              <button className="offer_add-btn min-w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 mt-6 transition-all hover:bg-brand-color-two">
                <img
                  className="offer_add-btn_img"
                  src="../images/section4/fi-rs-shopping-cart.svg"
                  alt="shopping-cart"
                />
                <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="our-offer-slide md:h-[512px] overflow-hidden border border-[#e5e5e5] hover:border-brand-color-one md:p-5 p-3 rounded-2xl relative transition-all">
            <div className="offer_percentage-wrapper absolute text-white bg-danger-color top-0 md:top-5 left-0 min-w-[64px] py-[10px] px-4 rounded-r-full">
              <p className="offer-percentage font-lato text-xs">Save 25%</p>
            </div>
            <div className="offer_img-wrapper md:mt-16 flex items-center justify-center md:max-w-[245px] max-w-[160px] xs:max-w-[215px] sm:max-w-[250px] xs:min-h-[120px] min-h-[100px] lg:h-[135px]">
              <img
                className="offer_img object-cover bg-center bg-no-repeat bg-cover h-[80px] xs:h-[100px] sm:h-[110px] lg:h-full"
                src="../images/section4/product03.png"
                alt="product"
              />
            </div>
            <div className="offer_content">
              <p className="offer_hodo-foods font-lato text-xs text-text-body md:mt-5">
                Hodo Foods
              </p>
              <h3 className="offer_title font-bold md:text-sm text-xs my-1 h-[48px] overflow-hidden text-ellipsis">
                Angie’s Boomchickapop Sweet & Salty Kettle Corn
              </h3>
              <div className="offer_rate-wrapper flex">
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/001-empty star.svg"
                  alt="star"
                />
                <p className="offer_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
              </div>
              <h5 className="offer_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
              <div className="offer_price-wrapper flex items-center justify-between">
                <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                  $2.51
                  <span className="offer_price-discount line-through text-xs text-text-body">
                    $2.80
                  </span>
                </p>
              </div>
              <div className="offer_sold-rate-wrapper mt-4">
                <div className="offer_sold-rate h-1 bg-[#e5e5e5] after:bg-brand-color-one after:w-3/4 relative after:absolute after:top-0 after:bottom-0 rounded-sm after:rounded-sm"></div>
                <p className="offer_sold font-lato text-xs mt-[6px]">Sold: 90/120</p>
              </div>
              <button className="offer_add-btn min-w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 mt-6 transition-all hover:bg-brand-color-two">
                <img
                  className="offer_add-btn_img"
                  src="../images/section4/fi-rs-shopping-cart.svg"
                  alt="shopping-cart"
                />
                <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="our-offer-slide md:h-[512px] overflow-hidden border border-[#e5e5e5] hover:border-brand-color-one md:p-5 p-3 rounded-2xl relative transition-all">
            <div className="offer_percentage-wrapper absolute text-white bg-danger-color top-0 md:top-5 left-0 min-w-[64px] py-[10px] px-4 rounded-r-full">
              <p className="offer-percentage font-lato text-xs">Save 25%</p>
            </div>
            <div className="offer_img-wrapper md:mt-16 flex items-center justify-center md:max-w-[245px] max-w-[160px] xs:max-w-[215px] sm:max-w-[250px] xs:min-h-[120px] min-h-[100px] lg:h-[135px]">
              <img
                className="offer_img object-cover bg-center bg-no-repeat bg-cover h-[80px] xs:h-[100px] sm:h-[110px] lg:h-full"
                src="../images/section4/product04.png"
                alt="product"
              />
            </div>
            <div className="offer_content">
              <p className="offer_hodo-foods font-lato text-xs text-text-body md:mt-5">
                Hodo Foods
              </p>
              <h3 className="offer_title font-bold md:text-sm text-xs my-1 h-[48px] overflow-hidden text-ellipsis">
                Foster Farms Takeout Crispy Classic Buffalo Wings
              </h3>
              <div className="offer_rate-wrapper flex">
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="offer_rate-img"
                  src="../images/section3/001-empty star.svg"
                  alt="star"
                />
                <p className="offer_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
              </div>
              <h5 className="offer_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
              <div className="offer_price-wrapper flex items-center justify-between">
                <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
                  $2.51
                  <span className="offer_price-discount line-through text-xs text-text-body">
                    $2.80
                  </span>
                </p>
              </div>
              <div className="offer_sold-rate-wrapper mt-4">
                <div className="offer_sold-rate h-1 bg-[#e5e5e5] after:bg-brand-color-one after:w-3/4 relative after:absolute after:top-0 after:bottom-0 rounded-sm after:rounded-sm"></div>
                <p className="offer_sold font-lato text-xs mt-[6px]">Sold: 90/120</p>
              </div>
              <button className="offer_add-btn min-w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 mt-6 transition-all hover:bg-brand-color-two">
                <img
                  className="offer_add-btn_img"
                  src="../images/section4/fi-rs-shopping-cart.svg"
                  alt="shopping-cart"
                />
                <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
