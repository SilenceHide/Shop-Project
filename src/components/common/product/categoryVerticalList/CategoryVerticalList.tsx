import React from "react";
import { MiniProductCard } from "../productCard";

interface Props {
  title: string;
  data: Array<any>;
}

export function CategoryVerticalList({ title, data }: Props) {
  return (
    <>
      <div className="category_wrapper">
        <h3 className="category_title font-bold md:text-2xl">{title}</h3>
        <div className="top-selling_wrapper md:mt-10 mt-4 bg-white flex flex-col gap-6">
          {data.map((item, index) => {
            return <MiniProductCard data={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
