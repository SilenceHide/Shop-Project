import React from "react";
import { ImageView } from "@/components/common";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="header_logo-svg">
      <ImageView
        className={"w-full min-h-[66px]"}
        src={"/images/header/Logo-main.svg"}
        alt={"header_logo-svg"}
        width={117}
        height={66}
      />
    </Link>
  );
}
