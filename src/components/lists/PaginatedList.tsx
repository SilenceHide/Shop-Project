import React from "react";
import { IconBox, ImageView, SimpleProductCard } from "../common";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  currentPage: number;
  totalPage: number;
  //   children: React.ReactNode;
  title?: string;
  data: Array<EntityType<ProductType>>;
}

export default function PaginatedList({ currentPage, totalPage, title, data }: Props) {
  let list = [];
  for (let index = 1; index < totalPage; index++) {
    list.push(
      <div
        key={index}
        className={`w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold cursor-pointer ${
          currentPage === index
            ? "text-white bg-brand-color-one"
            : " text-text-body bg-border-light"
        }`}
      >
        {index}
      </div>,
    );
  }

  return (
    <>
      <div className="flex justify-between rounded-[15px] bg-[#f5f5f5] sm:py-[25px] sm:px-[30px] p-5 mb-[48px]">
        <div className=" text-text-body font-bold max-w-[145px] sm:max-w-fit">
          There are <span className="text-brand-color-one">{data.length}</span> products in this
          category
        </div>
        <div className="text-text-body font-lato gap-1 flex justify-center items-center text-center">
          <ImageView src={"/images/category/fi-rs-sort.svg"} alt={"image"} width={16} height={16} />
          Sort by: Featured
          <IconBox icon="icon-angle-small-down" className="text-text-body-2" />
        </div>
      </div>
      <div className="flex items-center xs:justify-between justify-center max-w-[1180px] gap-5 flex-wrap">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden p-5 pb-5 md:pt-14 transition-all xl:max-w-[345px] lg:max-w-[280px] md:max-w-[345px] sm:max-w-[290px] xs:max-w-[230px] max-w-[290px] w-full min-h-[335px]"
              >
                <SimpleProductCard data={item} />
              </div>
            );
          })}
      </div>

      <div className="flex flex-wrap gap-[10px] mt-11">
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-border-light font-bold cursor-pointer">
          <ImageView
            className={"popular-fruits_section-left_arrow-img object-cover"}
            src={"/images/section3/fi-rs-arrow-small-left 1.svg"}
            alt={"arrow"}
            width={14}
            height={14}
          />
        </div>
        {list}
        {/* <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-text-body bg-border-light font-bold cursor-pointer pb-1">
          ...
        </div> */}
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-brand-color-one cursor-pointer">
          <ImageView
            className={"popular-fruits_section-right_arrow-img object-cover hidden md:block"}
            src={"/images/section3/fi-rs-arrow-small-right 2.svg"}
            alt={"arrow"}
            width={14}
            height={12}
          />
        </div>
      </div>
    </>
  );
}
