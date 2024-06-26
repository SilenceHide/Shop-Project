import { getAllProductsApiCall } from "@/api/Product";
import { ImageView, MiniProductCard } from "@/components";
import PaginatedList from "@/components/lists/PaginatedList";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

export default function Category() {
  const [page, setPage] = useState<number>(1);

  const { data: trendingProductData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "trending"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        filters: { is_trending: { $notNull: true } },
      }),
  });

  const { data: products } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "paginatedProducts", page],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        pagination: {
          page: page,
          pageSize: 9,
        },
      }),
  });

  return (
    <>
      <section className="mb-[68px] container mt-8">
        <div className="bg-hero-pattern rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-[#3bb77e33] bg-opacity-20 bg-cover bg-top bg-no-repeat flex lg:justify-between lg:items-start mt-[38px] relative lg:h-[235px] items-center justify-center">
          <div className="min-h-[160px] px-5 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px] flex items-center justify-center lg:justify-start lg:items-start">
            <h2 className="max-w-full md:text-5xl text-[40px] font-bold text-center md:leading-none leading-[50px]">
              Vegetables & tubers
            </h2>
          </div>
        </div>
      </section>

      <section className="container flex lg:flex-row flex-col md:justify-between">
        <div className="flex flex-col mr-7 max-w-[380px] w-full shrink-0">
          <form className="flex flex-col border-[1px] border-border-gray rounded-[15px] px-[25px] py-7 mb-[55px] shadow-main-shadow">
            <p className="text-2xl font-bold mb-[14px] pb-[14px] border-b border-[#D7DEDB]">
              Filter items
            </p>
            <div className="flex items-center justify-between mt-3 mb-[30px]">
              <div className="flex items-center gap-5">
                <p className="font-lato text-text-body-2 ">Price Range:</p>
                <p className="text-brand-color-one text-xl font-bold">$16 - $173</p>
              </div>
            </div>
            <div className="catalog_filter_price-range_wrapper mb-[14px] relative min-h-[20px]">
              <input
                id="fromSlider"
                type="range"
                className="catalog_filter_price-range"
                value={0}
                min={0}
                max={50}
              />
              <input
                id="toSlider"
                type="range"
                className="catalog_filter_price-range"
                value={100}
                min={51}
                max={100}
              />
            </div>
            <p className="font-lato text-text-body-2 mb-[21px]">Used for:</p>
            <div className="flex flex-col items-start mb-[20px]">
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_appetizer"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"appetizer"}
                  checked
                />
                <label
                  htmlFor="filter_appetizer"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Appetizer
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_salad"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"salad"}
                />
                <label
                  htmlFor="filter_salad"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Salad
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_eat-fresh"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"eat-fresh"}
                />
                <label
                  htmlFor="filter_eat-fresh"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Eat-fresh
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_juice"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"juice"}
                />
                <label
                  htmlFor="filter_juice"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Juice
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_smoothie"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"smoothie"}
                />
                <label
                  htmlFor="filter_smoothie"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Smoothie
                </label>
              </div>
            </div>

            <p className="font-lato text-text-body-2 mb-[21px]">Used for:</p>
            <div className="flex flex-col items-start mb-[30px]">
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_cobblestone"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"cobblestone"}
                />
                <label
                  htmlFor="filter_cobblestone"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Cobblestone
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_McVitie's"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"mcVitie's"}
                  checked
                />
                <label
                  htmlFor="filter_McVitie's"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  McVitie's
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_tastykake"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"tastykake"}
                />
                <label
                  htmlFor="filter_tastykake"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Tastykake
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_warburtons"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"warburtons"}
                />
                <label
                  htmlFor="filter_warburtons"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Warburtons
                </label>
              </div>
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_wonder-bread"
                  className="filter-input w-[18px] h-[18px] focus:text-text-heading"
                  value={"wonder-bread"}
                />
                <label
                  htmlFor="filter_wonder-bread"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Wonder Bread
                </label>
              </div>
            </div>

            <div className="flex justify-between relative ">
              <button
                type="submit"
                className="rounded bg-[#def9ec] px-[30px] h-[48px] text-brand-color-one flex justify-center items-center gap-1.5"
              >
                <ImageView
                  src={"/images/category/fi-rs-filter.svg"}
                  alt={"filter"}
                  width={16}
                  height={16}
                />
                Filter
              </button>
              <div className="absolute hidden md:block right-[-10px] bottom-[-20px]">
                <ImageView
                  src={"/images/category/filter-img.png"}
                  alt={"filter"}
                  width={200}
                  height={170}
                  className={"max-w-[200px] hidden md:block"}
                />
              </div>
            </div>
          </form>
          <div className="flex flex-col border-[1px] border-[#D7DEDB]rounded-[10px] px-[25px] py-7 gap-6 mb-10">
            <p className=" mb-[14px] pb-[14px] border-b text-2xl font-bold">Popular Items</p>
            {trendingProductData &&
              trendingProductData.data.map((item, index) => {
                if (index < 3) {
                  return (
                    <MiniProductCard
                      data={item}
                      key={index}
                      className={"cursor-pointer hover:text-brand-color-one transition-all"}
                      titleHeight={"h-[60px]"}
                    />
                  );
                }
              })}
          </div>
        </div>

        <div className="flex flex-col mb-5">
          {products && (
            <PaginatedList
              data={products.data}
              currentPage={page}
              totalPage={products.meta.pagination.pageCount}
              setPage={setPage}
            />
          )}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [getAllProductsApiCall.name, "trending"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["thumbnail"],
        filters: { is_trending: { $notNull: true } },
      }),
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}
