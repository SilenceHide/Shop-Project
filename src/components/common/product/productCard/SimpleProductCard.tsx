import React from "react";
import { Badge, IconBox, ImageView, Rating } from "@/components";
import Link from "next/link";

interface Props {
  data: {
    title: string;
    image: string;
    category: string;
    rate: number;
    weight: number;
    unit: string;
    price: number;
    sale_price: number;
    label: string;
  };
}

export function SimpleProductCard({ data }: Props) {
  return (
    <>
      <Badge badge={data.label} price={data.price} sale_price={data.sale_price} />
      <div className="product_img-wrapper relative flex items-center justify-center md:mt-3 md:max-w-[245px] max-w-[150px] md:min-h-[146px] min-h-[120px] max-h-[146px]">
        <ImageView
          className={"product_img bg-cover bg-center bg-no-repeat"}
          src={data.image}
          alt={"fruit"}
          width={202}
          height={146}
        />
        <div className="product_icons-wrapper flex opacity-0 invisible pointer-events-none absolute bg-white rounded-md h-8 w-[108px] items-center justify-center gap-[10px] transition-all border border-brand-color-one">
          <div className="product_icon-wrapper cursor-pointer flex justify-center items-center">
            <IconBox
              icon={"icon-heart"}
              size={"text-[15px]"}
              className={"product_icon text-brand-color-one"}
            />
          </div>
          <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
          <div className="product_icon-wrapper cursor-pointer flex justify-center items-center">
            <IconBox icon={"icon-shuffle"} size={"text-[15px]"} className={"product_icon"} />
          </div>
          <div className="product_icon-divider h-full w-[1px] bg-brand-color-one"></div>
          <div className="product_icon-wrapper cursor-pointer flex justify-center items-center">
            <IconBox icon={"icon-eye"} size={"text-[15px]"} className={"product_icon "} />
          </div>
        </div>
      </div>
      <div className="product_content">
        <p className="hodo_foods font-lato text-xs text-text-body md:mt-5">{data.category}</p>
        <Link href={"#"}>
          <h3 className="product_title font-bold md:text-sm text-xs my-1 h-[48px] text-ellipsis overflow-hidden">
            {data.title}
          </h3>
        </Link>
        <div className="product_rate-wrapper flex">
          <Rating rate={data.rate} />
        </div>
        <h5 className="product_weight font-lato text-xs text-text-body mt-1 mb-3">
          {data.weight} {data.unit}
        </h5>
        <div className="product_price-wrapper flex items-center justify-between">
          {data.sale_price ? (
            <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
              ${data.sale_price}
              <span className="offer_price-discount line-through text-xs text-text-body">
                ${data.price}
              </span>
            </p>
          ) : (
            <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
              ${data.price}
            </p>
          )}
          <div className="product_add-btn_wrapper">
            <button
              className="product_add-btn flex items-center justify-center gap-2 md:w-16 w-9 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 "
              type="button"
            >
              <span className="product_add-span">
                <span className="hidden md:inline-block">Add</span>+
              </span>
            </button>
            <input
              type="number"
              name="number"
              min="1"
              value="1"
              className="product_price-input md:max-w-16 max-w-9 hidden text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:pl-4 pl-2 font-bold text-sm py-1 h-[32px]"
              max="100"
              maxLength={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
