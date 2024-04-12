import { FeaturedCategoriesSlider, ImageView } from "@/components";
import React from "react";

export function FeaturedCategories() {
  return (
    <>
      <h2 className="featured-categories_section-title text-3xl font-bold hidden lg:block">
        Featured Categories
      </h2>
      <div className="featured-categories_wrapper mt-11 flex justify-center items-center flex-wrap sm:gap-5 gap-3">
        <div className="featured-category flex flex-col items-center justify-center rounded-[10px] bg-[#F2FCE4] hover:border-[#81B13D] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-1.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Fast Food</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            14 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#FFFCEB] hover:border-[#fdea7e] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-2.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Peach</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            17 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#ECFFEC] hover:border-[#95ff95] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-3.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Organic Kiwi</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            21 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#FEEFEA] hover:border-[#ffa081] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-4.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Red Apple</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            68 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#FFF3EB] hover:border-[#ffbf94] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-5.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Snack</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            34 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#FFF3FF] hover:border-[#ffb6ff] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-6.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Black plum</p>
          <p className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            25 items
          </p>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#F2FCE4] hover:border-[#bdff61] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-7.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Vegetables</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            65 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#FFFCEB] hover:border-[#ffe869] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-8.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Headphone</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            33 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#F2FCE4] hover:border-[#bbff5d] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-9.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Cake & Milk</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            54 items
          </h5>
        </div>
        <div className="featured-category flex flex-col items-center rounded-[10px] bg-[#FFF3FF] hover:border-[#ffa0ff] border-transparent border-2 pb-2 px-1 transition-all">
          <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
            <ImageView
              className={"featured-categories_img sm:w-[120px] w-[90px]"}
              src={"/images/section1/cat-10.png"}
              alt={"cat"}
              width={120}
              height={120}
            />
          </div>
          <p className="featured-categories_title text-xs sm:text-base font-bold">Orange</p>
          <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
            63 items
          </h5>
        </div>
      </div>

      <FeaturedCategoriesSlider />
    </>
  );
}
