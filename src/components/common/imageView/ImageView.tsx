import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  className?: string;
}

export function ImageView({ src, alt, width, height, className = "" }: Props) {
  const isRemote = src.substring(0, 8) === "/uploads";

  if (src.length > 0) {
    return (
      <Image
        className={className}
        src={`${isRemote ? "https://nest.navaxcollege.com" + src : src}`}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
      />
    );
  } else {
    return (
      <Image
        className={className}
        src={"/images/section1/cat-9.png"}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
      />
    );
  }
}
