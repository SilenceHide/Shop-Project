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
          src={data.image}
          alt={"img"}
          width={120}
          height={120}
        />
      </div>
      <div className="top-selling_content-wrapper">
        <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
          {data.title}
        </p>
        <div className="top-selling-wrapper flex">
          <Rating rate={data.rate} />
        </div>
        <div className="top-selling_price-wrapper flex items-center justify-between">
          {data.sale_price ? (
            <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
              ${data.sale_price}
              <span className="top-selling_price-discount line-through text-xs text-text-body">
                ${data.price}
              </span>
            </p>
          ) : (
            <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
              ${data.price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
