import React from "react";
import { ImageView } from "../../imageView";
import { Rating } from "../../ui";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  data: EntityType<ProductType>;
  className?: string;
  titleHeight?: string;
}

export function MiniProductCard({ data, className = "", titleHeight = "h-[72px]" }: Props) {
  return (
    <div className={`top-selling_item flex items-start gap-5 ${className}`}>
      <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px] ">
        <ImageView
          className={"top-selling_img rounded-xl max-w-[120px] "}
          src={data.attributes.thumbnail?.data?.attributes.url}
          alt={"img"}
          width={120}
          height={120}
        />
      </div>
      <div className="top-selling_content-wrapper">
        <p
          className={`top-selling_content-title font-bold overflow-hidden text-ellipsis ${titleHeight}`}
        >
          {data.attributes.title}
        </p>
        <div className="top-selling-wrapper flex">
          <Rating rate={data.attributes.rate} />
        </div>
        <div className="top-selling_price-wrapper flex items-center justify-between">
          {data.attributes.sell_price ? (
            <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
              ${data.attributes.sell_price}
              <span className="top-selling_price-discount line-through text-xs text-text-body">
                ${data.attributes.price}
              </span>
            </p>
          ) : (
            <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
              ${data.attributes.price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
