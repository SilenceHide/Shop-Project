import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { timerHelper } from "@/utils/timer";

export function DealsSlider() {
  const [remainTime, setRemainTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      //   const timerObj = timerHelper();
      // setRemainTime(timerObj)
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
        className="deals_slider md:mt-12 mt-5"
      >
        <SwiperSlide className="deals-slide ">
          <div
            className="deal relative h-[310px] md:h-[440px] max-w-[340px] md:max-w-[380px]"
            id="deal"
          >
            <img
              className="deal_img object-cover w-[342px] h-[200px] rounded-2xl md:w-full md:h-fit"
              src="../images/section5/img01.png"
              alt="img"
            />
            <div className="deal_content-wrapper absolute left-0 bottom-2 right-0 flex flex-col items-center justify-center gap-3 w-full">
              <div className="deal_remaining-time-wrapper flex items-center gap-3">
                <div className="deal_remaining-days-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-days-number text-brand-color-one font-bold text-[28px] leading-none">
                    05
                  </p>
                  <p className="deal_remaining-days-subtitle font-lato text-sm">Days</p>
                </div>
                <div className="deal_remaining-hours-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-hours-number text-brand-color-one font-bold text-[28px] leading-none">
                    06
                  </p>
                  <p className="deal_remaining-hours-subtitle font-lato text-sm">Hours</p>
                </div>
                <div className="deal_remaining-mins-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-mins-number text-brand-color-one font-bold text-[28px] leading-none">
                    56
                  </p>
                  <p className="deal_remaining-mins-subtitle font-lato text-sm">Mins</p>
                </div>
                <div className="deal_remaining-sec-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                    18
                  </p>
                  <p className="deal_remaining-sec-subtitle font-lato text-sm">Sec</p>
                </div>
              </div>

              <div className="deal_content md:max-w-[325px] max-w-[295px] bg-white px-8 py-6 rounded-xl shadow-[5px_5px_5px_0_rgba(24,24,24,0.05)]">
                <h3 className="deal_title h-8 font-bold md:text-sm text-xs my-1">
                  Seeds of Change Organic Quinoa, Brown, & Red Rice
                </h3>
                <div className="deal_rate-wrapper flex">
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="deal_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <h5 className="deal_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
                <div className="deal_price-wrapper flex items-center justify-between">
                  <p className="deal_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="deal_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                  <div className="deal_add-btn_wrapper">
                    <button
                      className="deal_add-btn flex items-center justify-center gap-2 w-16 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 hover:text-brand-color-two"
                      type="button"
                    >
                      <span className="deal_add-span">Add</span>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="deal_add-icon"
                      >
                        <g id="fi-rs-plus-small 1" clip-path="url(#clip0_3374_2960)">
                          <g id="01 align center">
                            <path
                              id="Vector"
                              d="M4.66667 3.33333V0H3.33333V3.33333H0V4.66667H3.33333V8H4.66667V4.66667H8V3.33333H4.66667Z"
                              fill="#3BB77E"
                              className="transition-all"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_3374_2960">
                            <rect width="8" height="8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <input
                      type="number"
                      name="number"
                      min="1"
                      value="1"
                      className="deal_number-input hidden max-w-16 text-brand-color-one focus:outline-0 border border-brand-color-one rounded pl-4 font-bold text-sm py-1 h-[32px]"
                      max="100"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="deals-slide ">
          <div
            className="deal relative h-[310px] md:h-[440px] max-w-[340px] md:max-w-[380px]"
            id="deal2"
          >
            <img
              className="deal_img object-cover w-[342px] h-[200px] rounded-2xl md:w-full md:h-fit"
              src="../images/section5/img02.png"
              alt="img"
            />
            <div className="deal_content-wrapper absolute left-0 bottom-2 right-0 flex flex-col items-center justify-center gap-3 w-full">
              <div className="deal_remaining-time-wrapper flex items-center gap-3">
                <div className="deal_remaining-days-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-days-number text-brand-color-one font-bold text-[28px] leading-none">
                    05
                  </p>
                  <p className="deal_remaining-days-subtitle font-lato text-sm">Days</p>
                </div>
                <div className="deal_remaining-hours-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-hours-number text-brand-color-one font-bold text-[28px] leading-none">
                    12
                  </p>
                  <p className="deal_remaining-hours-subtitle font-lato text-sm">Hours</p>
                </div>
                <div className="deal_remaining-mins-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-mins-number text-brand-color-one font-bold text-[28px] leading-none">
                    52
                  </p>
                  <p className="deal_remaining-mins-subtitle font-lato text-sm">Mins</p>
                </div>
                <div className="deal_remaining-sec-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                    17
                  </p>
                  <p className="deal_remaining-sec-subtitle font-lato text-sm">Sec</p>
                </div>
              </div>

              <div className="deal_content md:max-w-[325px] max-w-[295px] bg-white px-8 py-6 rounded-xl shadow-[5px_5px_5px_0_rgba(24,24,24,0.05)]">
                <h3 className="deal_title h-8 font-bold md:text-sm text-xs my-1">
                  Perdue Simply Smart Organics Gluten Free Breaded
                </h3>
                <div className="deal_rate-wrapper flex">
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="deal_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <h5 className="deal_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
                <div className="deal_price-wrapper flex items-center justify-between">
                  <p className="deal_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="deal_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                  <div className="deal_add-btn_wrapper">
                    <button
                      className="deal_add-btn flex items-center justify-center gap-2 w-16 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 hover:text-brand-color-two"
                      type="button"
                    >
                      <span className="deal_add-span">Add</span>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="deal_add-icon"
                      >
                        <g id="fi-rs-plus-small 1" clip-path="url(#clip0_3374_2960)">
                          <g id="01 align center">
                            <path
                              id="Vector"
                              d="M4.66667 3.33333V0H3.33333V3.33333H0V4.66667H3.33333V8H4.66667V4.66667H8V3.33333H4.66667Z"
                              fill="#3BB77E"
                              className="transition-all"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_3374_2960">
                            <rect width="8" height="8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <input
                      type="number"
                      name="number"
                      min="1"
                      value="1"
                      className="deal_number-input hidden max-w-16 text-brand-color-one focus:outline-0 border border-brand-color-one rounded pl-4 font-bold text-sm py-1 h-[32px]"
                      max="100"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="deals-slide ">
          <div
            className="deal relative h-[310px] md:h-[440px] max-w-[340px] md:max-w-[380px]"
            id="deal3"
          >
            <img
              className="deal_img object-cover w-[342px] h-[200px] rounded-2xl md:w-full md:h-fit"
              src="../images/section5/img03.png"
              alt="img"
            />
            <div className="deal_content-wrapper absolute left-0 bottom-2 right-0 flex flex-col items-center justify-center gap-3 w-full">
              <div className="deal_remaining-time-wrapper flex items-center gap-3">
                <div className="deal_remaining-days-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-days-number text-brand-color-one font-bold text-[28px] leading-none">
                    05
                  </p>
                  <p className="deal_remaining-days-subtitle font-lato text-sm">Days</p>
                </div>
                <div className="deal_remaining-hours-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-hours-number text-brand-color-one font-bold text-[28px] leading-none">
                    05
                  </p>
                  <p className="deal_remaining-hours-subtitle font-lato text-sm">Hours</p>
                </div>
                <div className="deal_remaining-mins-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-mins-number text-brand-color-one font-bold text-[28px] leading-none">
                    56
                  </p>
                  <p className="deal_remaining-mins-subtitle font-lato text-sm">Mins</p>
                </div>
                <div className="deal_remaining-sec-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                    18
                  </p>
                  <p className="deal_remaining-sec-subtitle font-lato text-sm">Sec</p>
                </div>
              </div>

              <div className="deal_content md:max-w-[325px] max-w-[295px] bg-white px-8 py-6 rounded-xl shadow-[5px_5px_5px_0_rgba(24,24,24,0.05)]">
                <h3 className="deal_title h-8 font-bold md:text-sm text-xs my-1">
                  Signature Wood-Fired Mushroom and Caramelized Red Onion
                </h3>
                <div className="deal_rate-wrapper flex">
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="deal_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <h5 className="deal_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
                <div className="deal_price-wrapper flex items-center justify-between">
                  <p className="deal_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="deal_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                  <div className="deal_add-btn_wrapper">
                    <button
                      className="deal_add-btn flex items-center justify-center gap-2 w-16 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 hover:text-brand-color-two"
                      type="button"
                    >
                      <span className="deal_add-span">Add</span>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="deal_add-icon"
                      >
                        <g id="fi-rs-plus-small 1" clip-path="url(#clip0_3374_2960)">
                          <g id="01 align center">
                            <path
                              id="Vector"
                              d="M4.66667 3.33333V0H3.33333V3.33333H0V4.66667H3.33333V8H4.66667V4.66667H8V3.33333H4.66667Z"
                              fill="#3BB77E"
                              className="transition-all"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_3374_2960">
                            <rect width="8" height="8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <input
                      type="number"
                      name="number"
                      min="1"
                      value="1"
                      className="deal_number-input hidden max-w-16 text-brand-color-one focus:outline-0 border border-brand-color-one rounded pl-4 font-bold text-sm py-1 h-[32px]"
                      max="100"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="deals-slide ">
          <div
            className="deal relative h-[310px] md:h-[440px] max-w-[340px] md:max-w-[380px]"
            id="deal4"
          >
            <img
              className="deal_img object-cover w-[342px] h-[200px] rounded-2xl md:w-full md:h-fit"
              src="../images/section5/img04.png"
              alt="img"
            />
            <div className="deal_content-wrapper absolute left-0 bottom-2 right-0 flex flex-col items-center justify-center gap-3 w-full">
              <div className="deal_remaining-time-wrapper flex items-center gap-3">
                <div className="deal_remaining-days-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-days-number text-brand-color-one font-bold text-[28px] leading-none">
                    05
                  </p>
                  <p className="deal_remaining-days-subtitle font-lato text-sm">Days</p>
                </div>
                <div className="deal_remaining-hours-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-hours-number text-brand-color-one font-bold text-[28px] leading-none">
                    06
                  </p>
                  <p className="deal_remaining-hours-subtitle font-lato text-sm">Hours</p>
                </div>
                <div className="deal_remaining-mins-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-mins-number text-brand-color-one font-bold text-[28px] leading-none">
                    56
                  </p>
                  <p className="deal_remaining-mins-subtitle font-lato text-sm">Mins</p>
                </div>
                <div className="deal_remaining-sec-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
                  <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                    18
                  </p>
                  <p className="deal_remaining-sec-subtitle font-lato text-sm">Sec</p>
                </div>
              </div>

              <div className="deal_content md:max-w-[325px] max-w-[295px] bg-white px-8 py-6 rounded-xl shadow-[5px_5px_5px_0_rgba(24,24,24,0.05)]">
                <h3 className="deal_title h-8 font-bold md:text-sm text-xs my-1">
                  Simply Lemonade with Raspberry Juice
                </h3>
                <div className="deal_rate-wrapper flex">
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="deal_rate-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="deal_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <h5 className="deal_weight font-lato text-xs text-text-body mt-1 mb-3">500 gram</h5>
                <div className="deal_price-wrapper flex items-center justify-between">
                  <p className="deal_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="deal_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                  <div className="deal_add-btn_wrapper">
                    <button
                      className="deal_add-btn flex items-center justify-center gap-2 w-16 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 hover:text-brand-color-two"
                      type="button"
                    >
                      <span className="deal_add-span">Add</span>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="deal_add-icon"
                      >
                        <g id="fi-rs-plus-small 1" clip-path="url(#clip0_3374_2960)">
                          <g id="01 align center">
                            <path
                              id="Vector"
                              d="M4.66667 3.33333V0H3.33333V3.33333H0V4.66667H3.33333V8H4.66667V4.66667H8V3.33333H4.66667Z"
                              fill="#3BB77E"
                              className="transition-all"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_3374_2960">
                            <rect width="8" height="8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <input
                      type="number"
                      name="number"
                      min="1"
                      value="1"
                      className="deal_number-input hidden max-w-16 text-brand-color-one focus:outline-0 border border-brand-color-one rounded pl-4 font-bold text-sm py-1 h-[32px]"
                      max="100"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
