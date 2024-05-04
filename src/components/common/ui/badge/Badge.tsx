import React from "react";

interface Props {
  badge: string;
  price: number;
  sale_price?: number;
}

export function Badge({ badge = "", price, sale_price = 0 }: Props) {
  const rate = 100 - Math.round((sale_price / price) * 100);

  return (
    <>
      {badge.length > 0 ? (
        <div
          className={`product_label-wrapper absolute z-10 ${
            badge.toLowerCase() == "hot" ? "bg-danger-color" : "bg-warning-color"
          }  text-white font-lato text-xs py-[10px] px-4 left-0 md:top-5 top-0 rounded-r-full min-w-[64px] flex justify-center items-center`}
        >
          <p className="product_label">{badge}</p>
        </div>
      ) : sale_price ? (
        <div
          className={`product_label-wrapper absolute z-10 ${
            badge.toLowerCase() == "hot" ? "bg-danger-color" : "bg-brand-color-one"
          }  text-white font-lato text-xs py-[10px] px-4 left-0 md:top-5 top-0 rounded-r-full min-w-[64px] flex justify-center items-center`}
        >
          <p className="product_label">{rate}%</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
