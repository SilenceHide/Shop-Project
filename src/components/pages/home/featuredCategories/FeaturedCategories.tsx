import { FeaturedCategoriesSlider, ImageView } from "@/components";
import Link from "next/link";
import React from "react";
import { featuredCategoriesMock } from "@/mock/featuredCategories";

export function FeaturedCategories() {
  return (
    <>
      <h2 className="featured-categories_section-title text-3xl font-bold hidden lg:block">
        Featured Categories
      </h2>
      <div className="featured-categories_wrapper mt-11 flex justify-center items-center flex-wrap sm:gap-5 gap-3">
        {featuredCategoriesMock.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className={`featured-category flex flex-col items-center justify-center rounded-[10px] bg-[${item.color}] hover:border-[${item.border}] border-transparent border-2 pb-2 px-1 transition-all`}
            >
              <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
                <ImageView
                  className={"featured-categories_img sm:w-[120px] w-[90px]"}
                  src={item.img}
                  alt={"cat"}
                  width={120}
                  height={120}
                />
              </div>
              <p className="featured-categories_title text-xs sm:text-base font-bold">
                {item.title}
              </p>
              <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
                {item.items} items
              </h5>
            </Link>
          );
        })}
      </div>

      <FeaturedCategoriesSlider />
    </>
  );
}
