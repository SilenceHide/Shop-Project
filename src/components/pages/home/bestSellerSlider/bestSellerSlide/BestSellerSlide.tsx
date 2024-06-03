import { ImageView, Rating } from "@/components/common";
import { useBasket } from "@/hooks/useBasket";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import Link from "next/link";
import React from "react";

interface Props {
  data: EntityType<ProductType>;
}

export function BestSellerSlide({ data }: Props) {
  const { addItem, updateItem, getItem } = useBasket();

  const currentProductInBasket = getItem(data.id);

  return (
    <>
      <div className="offer_percentage-wrapper absolute text-white bg-danger-color top-0 md:top-5 left-0 min-w-[64px] py-[10px] px-4 rounded-r-full">
        <p className="offer-percentage font-lato text-xs">Save 25%</p>
      </div>
      <div className="offer_img-wrapper md:mt-16 flex items-center justify-center md:max-w-[245px] max-w-[160px] xs:max-w-[215px] sm:max-w-[250px] xs:min-h-[120px] min-h-[100px] lg:h-[135px]">
        <ImageView
          className={
            "offer_img bg-center bg-no-repeat bg-cover h-[80px] xs:h-[100px] sm:h-[110px] lg:h-full max-h-[135px] lg:max-w-[210px] xs:max-w-[160px]  max-w-[120px]"
          }
          src={data.attributes.thumbnail?.data?.attributes.url}
          alt={"product"}
          width={210}
          height={135}
        />
      </div>
      <div className="offer_content">
        {data.attributes.categories?.data[0] ? (
          <p className="offer_hodo-foods font-lato text-xs text-text-body md:mt-5">
            {data.attributes.categories?.data[0].attributes.title}
          </p>
        ) : (
          <p className="offer_hodo-foods font-lato text-xs text-text-body md:mt-5">Hodo Foods</p>
        )}
        <div className="offer_title font-bold md:text-sm text-xs my-1 min-h-[48px] overflow-hidden text-ellipsis">
          <Link href={`/product/${data.id}`} target="_blank">
            {data.attributes.title}
          </Link>
        </div>
        <div className="offer_rate-wrapper flex">
          <Rating rate={data.attributes.rate} />
        </div>
        <h5 className="offer_weight font-lato text-xs text-text-body mt-1 mb-3">
          {data.attributes.weight} gram
        </h5>
        <div className="offer_price-wrapper flex items-center justify-between">
          {data.attributes.sell_price ? (
            <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
              ${data.attributes.sell_price}
              <span className="offer_price-discount line-through text-xs text-text-body">
                ${data.attributes.price}
              </span>
            </p>
          ) : (
            <p className="offer_price flex items-center justify-between md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
              ${data.attributes.price}
            </p>
          )}
        </div>
        <div className="offer_sold-rate-wrapper mt-4">
          <div className="offer_sold-rate h-1 bg-[#e5e5e5] relative  rounded-sm ">
            <div
              className="bg-brand-color-one rounded-sm h-1"
              style={{
                width: `${
                  data.attributes.sold &&
                  data.attributes.total &&
                  (data.attributes.sold / data.attributes.total) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className="offer_sold font-lato text-xs mt-[6px]">
            Sold: {data.attributes.sold}/{data.attributes.total}
          </p>
        </div>
        {currentProductInBasket ? (
          <button
            onClick={() => updateItem(data.id, "increase")}
            type="button"
            className="offer_add-btn min-w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 mt-6 transition-all hover:bg-brand-color-two"
          >
            <img
              className="offer_add-btn_img"
              src="../images/section4/fi-rs-shopping-cart.svg"
              alt="shopping-cart"
            />
            <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
          </button>
        ) : (
          <button
            onClick={() => addItem(data.id)}
            type="button"
            className="offer_add-btn min-w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 mt-6 transition-all hover:bg-brand-color-two"
          >
            <img
              className="offer_add-btn_img"
              src="../images/section4/fi-rs-shopping-cart.svg"
              alt="shopping-cart"
            />
            <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
          </button>
        )}
      </div>
    </>
  );
}
