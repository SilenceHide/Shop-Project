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
        <h3 className="category_title font-bold md:text-2xl">Top Selling</h3>
        <div className="top-selling_wrapper md:mt-10 mt-4 bg-white flex flex-col gap-6">
          {data.map((item, index) => {
            return <MiniProductCard data={item} key={index} />;
          })}

          <div className="top-selling_item flex items-start gap-5">
            <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px]">
              <img
                className="top-selling_img rounded-xl"
                src="../images/section6/col01-img01.png"
                alt="img"
              />
            </div>
            <div className="top-selling_content-wrapper">
              <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                Nestle Original Coffee-Mate Coffee Creamer
              </p>
              <div className="top-selling-wrapper flex">
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/001-empty star.svg"
                  alt="star"
                />
                <p className="top-selling-number font-lato text-xs text-text-body ml-2">(4.0)</p>
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

          <div className="top-selling_item flex items-start gap-5">
            <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px]">
              <img
                className="top-selling_img rounded-xl"
                src="../images/section6/col01-img02.png"
                alt="img"
              />
            </div>
            <div className="top-selling_content-wrapper">
              <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                Organic 100% Grassfed 85_15 Ground Beef
              </p>
              <div className="top-selling-wrapper flex">
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/001-empty star.svg"
                  alt="star"
                />
                <p className="top-selling-number font-lato text-xs text-text-body ml-2">(4.0)</p>
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

          <div className="top-selling_item flex items-start gap-5">
            <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px]">
              <img
                className="top-selling_img rounded-xl"
                src="../images/section6/col01-img03.png"
                alt="img"
              />
            </div>
            <div className="top-selling_content-wrapper">
              <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                Naturally Flavored Salted Caramel Light Roast Coffee
              </p>
              <div className="top-selling-wrapper flex">
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/002-fill star.svg"
                  alt="star"
                />
                <img
                  className="top-selling-img"
                  src="../images/section3/001-empty star.svg"
                  alt="star"
                />
                <p className="top-selling-number font-lato text-xs text-text-body ml-2">(4.0)</p>
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
        </div>
      </div>
    </>
  );
}
