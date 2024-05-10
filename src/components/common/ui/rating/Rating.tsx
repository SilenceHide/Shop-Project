import React from "react";
import { ImageView } from "@/components";

interface Props {
  rate: number;
}

export function Rating({ rate }: Props) {
  let fillStar = [];
  let emptyStar = [];

  for (let i = 0; i < rate; i++) {
    fillStar.push(
      <ImageView
        key={i}
        className={"product_rate-img"}
        src={"/images/section3/002-fill star.svg"}
        alt={"star"}
        width={12}
        height={16}
      />,
    );
  }

  for (let i = rate; i < 5; i++) {
    emptyStar.push(
      <ImageView
        key={i}
        className={"product_rate-img"}
        src={"/images/section3/001-empty star.svg"}
        alt={"star"}
        width={12}
        height={16}
      />,
    );
  }

  return (
    <>
      {fillStar}
      {emptyStar}
      <p className="product_rate-number font-lato text-xs text-text-body ml-2">({rate})</p>
    </>
  );
}
