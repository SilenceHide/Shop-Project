import { FeaturedCategoriesSlider, ImageView } from "@/components";
import Link from "next/link";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedCategoryApiCall } from "@/api/Category";
import { ApiResponseType, CategoryType, EntityType } from "@/types";

export function FeaturedCategories() {
  const { data: featuredCategories } = useQuery<ApiResponseType<CategoryType>>({
    queryKey: [getFeaturedCategoryApiCall.name],
    queryFn: () => getFeaturedCategoryApiCall(),
  });

  console.log(featuredCategories?.data[0]);

  return (
    <>
      <h2 className="featured-categories_section-title text-3xl font-bold hidden lg:block">
        Featured Categories
      </h2>
      <div className="featured-categories_wrapper mt-11 flex justify-center items-center flex-wrap sm:gap-5 gap-3">
        {featuredCategories &&
          featuredCategories.data.map((item: EntityType<CategoryType>, index: number) => {
            return (
              <Link
                key={index}
                href={item.attributes.link ?? "/category"}
                style={{ backgroundColor: `${item.attributes.color}` }}
                className={`featured-category flex flex-col items-center justify-center rounded-[10px] border-transparent border-2 py-2 px-1 transition-all hover:border-[#81B13D]`}
              >
                <div className="featured-categories_img-wrapper sm:w-[120px] w-[90px]">
                  <ImageView
                    className={
                      "featured-categories_img sm:w-[110px] w-[90px] sm:h-[110px] h-[90px] m-auto "
                    }
                    src={item.attributes.thumbnail.data?.attributes.url ?? ""}
                    alt={"cat"}
                    width={110}
                    height={110}
                  />
                </div>
                <p className="featured-categories_title text-xs sm:text-base font-bold">
                  {item.attributes.title}
                </p>
                <h5 className="featured-categories_subtitle hidden sm:block text-xs font-lato text-text-body-2">
                  {item.attributes.product_count} items
                </h5>
              </Link>
            );
          })}
      </div>

      <FeaturedCategoriesSlider />
    </>
  );
}
