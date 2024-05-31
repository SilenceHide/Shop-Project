import React, { useState } from "react";
import { Badge, IconBox, ImageView, Rating } from "@/components";
import Link from "next/link";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import AddProductInput from "./AddProductInput";

interface Props {
  data: EntityType<ProductType>;
}

export function SimpleProductCard({ data }: Props) {
  return (
    <>
      {data.attributes.label && (
        <Badge
          badge={data.attributes.label}
          price={data.attributes.price}
          sale_price={data.attributes.sell_price}
        />
      )}
      <div className="product_img-wrapper relative flex items-center justify-center md:mt-3 md:max-w-[245px] max-w-[150px] md:min-h-[146px] min-h-[120px] max-h-[146px] m-auto">
        <ImageView
          className={
            "product_img bg-cover bg-center bg-no-repeat md:max-w-[180px] md:max-h-[170px] max-w-[150px] max-h-[170px]"
          }
          src={data.attributes.thumbnail?.data?.attributes.url}
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
        {data.attributes.categories?.data[0] ? (
          <p className="hodo_foods font-lato text-xs text-text-body md:mt-5">
            {data.attributes.categories?.data[0].attributes.title}
          </p>
        ) : (
          <p className="hodo_foods font-lato text-xs text-text-body md:mt-5">Hodo Foods</p>
        )}
        <Link href={`/product/${data.id}`} target="_blank">
          <h3 className="product_title font-bold md:text-sm text-xs my-1 h-[48px] text-ellipsis overflow-hidden">
            {data.attributes.title}
          </h3>
        </Link>
        <div className="product_rate-wrapper flex">
          <Rating rate={data.attributes.rate} />
        </div>
        <h5 className="product_weight font-lato text-xs text-text-body mt-1 mb-3">
          {data.attributes.weight} {data.attributes.unit}
        </h5>
        <div className="product_price-wrapper flex items-center justify-between ">
          {data.attributes.sell_price ? (
            <p className="offer_price flex items-center justify-between sm:flex-row flex-col md:gap-2 gap-1 font-bold md:text-xl text-sm text-brand-color-one">
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

          <AddProductInput productData={data} />
        </div>
      </div>
    </>
  );
}
