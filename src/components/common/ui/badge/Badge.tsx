import React from "react";

interface Props {
  badge: string;
  price: number;
  sale_price?: number;
}

export function Badge() {
  return (
    <div className="product_label-wrapper absolute z-10 bg-brand-color-one text-white font-lato text-xs py-[10px] px-4 left-0 md:top-5 top-0 rounded-r-full min-w-[64px] flex justify-center items-center">
      <p className="product_label">-17%</p>
    </div>
  );
}
