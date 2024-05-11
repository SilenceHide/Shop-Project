import React from "react";
import { MiniProductCard } from "../productCard";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  title: string;
  sliderData: Array<EntityType<ProductType>>;
}

export function CategoryVerticalList({ title, sliderData }: Props) {
  return (
    <>
      <div className="category_wrapper">
        <h3 className="category_title font-bold md:text-2xl">{title}</h3>
        <div className="top-selling_wrapper md:mt-10 mt-4 bg-white flex flex-col gap-6">
          {sliderData.map((item, index) => {
            return <MiniProductCard data={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
