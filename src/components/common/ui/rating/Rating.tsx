import React from "react";
import { ImageView } from "@/components";

interface Props {
  rate: number;
}

export function Rating() {
  let fillStar = [];
  let emptyStar = [];

  //   for (let i = 0; i < rate; i++) {
  //     fillStar.push(
  //       <ImageView
  //         className={"product_rate-img"}
  //         src={"/images/section3/002-fill star.svg"}
  //         alt={"star"}
  //         width={12}
  //         height={16}
  //       />,
  //     );
  //   }

  //   for (let i = rate; i < 5; i++) {
  //     emptyStar.push(
  //       <ImageView
  //         className={"product_rate-img"}
  //         src={"/images/section3/001-empty star.svg"}
  //         alt={"star"}
  //         width={12}
  //         height={16}
  //       />,
  //     );
  //   }

  return (
    <>
      <ImageView
        className={"product_rate-img"}
        src={"/images/section3/002-fill star.svg"}
        alt={"star"}
        width={12}
        height={16}
      />
      <ImageView
        className={"product_rate-img"}
        src={"/images/section3/002-fill star.svg"}
        alt={"star"}
        width={12}
        height={16}
      />
      <ImageView
        className={"product_rate-img"}
        src={"/images/section3/002-fill star.svg"}
        alt={"star"}
        width={12}
        height={16}
      />
      <ImageView
        className={"product_rate-img"}
        src={"/images/section3/002-fill star.svg"}
        alt={"star"}
        width={12}
        height={16}
      />
      <ImageView
        className={"product_rate-img"}
        src={"/images/section3/001-empty star.svg"}
        alt={"star"}
        width={12}
        height={16}
      />
      {/* {fillStar}{emptyStar} */}
      <p className="product_rate-number font-lato text-xs text-text-body ml-2">(4.0)</p>
    </>
  );
}
