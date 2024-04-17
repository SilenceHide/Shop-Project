import React from "react";
import { ImageView } from "../../imageView";
import { Rating } from "../../ui";

interface Props {
  data: {
    image: string;
    title: string;
    rate: number;
    price: number;
    sale_price?: number;
  };
}

export function MiniProductCard({ data }: Props) {
  return (
    <div className="top-selling_item flex items-start gap-5">
      <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px]">
        <ImageView
          className={"top-selling_img rounded-xl"}
          src={"/images/section6/col01-img01.png"}
          alt={"img"}
          width={120}
          height={120}
        />
      </div>
      <div className="top-selling_content-wrapper">
        <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
          Nestle Original Coffee-Mate Coffee Creamer
        </p>
        <div className="top-selling-wrapper flex">
          <Rating />
        </div>
        <div className="top-selling_price-wrapper flex items-center justify-between">
          <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
            $2.51
            <span className="top-selling_price-discount line-through text-xs text-text-body">
              $2.80
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
