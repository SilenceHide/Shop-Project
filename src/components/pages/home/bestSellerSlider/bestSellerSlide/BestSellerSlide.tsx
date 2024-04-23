import { ImageView, Rating } from "@/components/common";
import React from "react";

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
    sold: number;
    total: number;
  };
}

export function BestSellerSlide({ data }: Props) {
  return (
    <>
      <div className="offer_percentage-wrapper absolute text-white bg-danger-color top-0 md:top-5 left-0 min-w-[64px] py-[10px] px-4 rounded-r-full">
        <p className="offer-percentage font-lato text-xs">Save 25%</p>
      </div>
      <div className="offer_img-wrapper md:mt-16 flex items-center justify-center md:max-w-[245px] max-w-[160px] xs:max-w-[215px] sm:max-w-[250px] xs:min-h-[120px] min-h-[100px] lg:h-[135px]">
        <ImageView
          className={
            "offer_img object-cover bg-center bg-no-repeat bg-cover h-[80px] xs:h-[100px] sm:h-[110px] lg:h-full max-h-[135px] "
          }
          src={data.image}
          alt={"product"}
          width={220}
          height={135}
        />
      </div>
      <div className="offer_content">
        <p className="offer_hodo-foods font-lato text-xs text-text-body md:mt-5">{data.category}</p>
        <h3 className="offer_title font-bold md:text-sm text-xs my-1 h-[48px] overflow-hidden text-ellipsis">
          {data.title}
        </h3>
        <div className="offer_rate-wrapper flex">
          <Rating rate={data.rate} />
        </div>
        <h5 className="offer_weight font-lato text-xs text-text-body mt-1 mb-3">
          {data.weight} gram
        </h5>
        <div className="offer_price-wrapper flex items-center justify-between">
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
        </div>
        <div className="offer_sold-rate-wrapper mt-4">
          <div className="offer_sold-rate h-1 bg-[#e5e5e5] relative  rounded-sm ">
            <div
              className="bg-brand-color-one rounded-sm h-1"
              style={{ width: `${(data.sold / data.total) * 100}%` }}
            ></div>
          </div>
          <p className="offer_sold font-lato text-xs mt-[6px]">
            Sold: {data.sold}/{data.total}
          </p>
        </div>
        <button className="offer_add-btn min-w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 mt-6 transition-all hover:bg-brand-color-two">
          <img
            className="offer_add-btn_img"
            src="../images/section4/fi-rs-shopping-cart.svg"
            alt="shopping-cart"
          />
          <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
        </button>
      </div>
    </>
  );
}
